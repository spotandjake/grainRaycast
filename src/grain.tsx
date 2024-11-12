import { useEffect, useState } from "react";
import { List, showToast, Toast } from "@raycast/api";
import zod from "zod";
import { algoliasearch, type Algoliasearch } from "algoliasearch";
import SearchItem, { type SearchResult, ResultType } from "./SearchItem";
// TODO: Look into the Frequency Sorting API
// Zod Schema
interface SearchResultHierarchy {
  [key: string]: SearchResultHierarchy | SearchResult;
}
const resultTypeSchema = zod.nativeEnum(ResultType);
const searchResponseItemSchema = zod.object({
  type: resultTypeSchema,
  anchor: zod.string().optional(),
  hierarchy: zod.record(resultTypeSchema, zod.string().nullable()),
  objectID: zod.string(),
  url: zod.string(),
});
// Algolia Config
const algoliaConfig = {
  appId: "CDP8WGS04L",
  apiKey: "fb27c36015ee3fd18739deeb1be5f71b",
  indexName: "grain-lang",
};

// Algolia Search Helper
const searchGrainDocumentation = async (searchClient: Algoliasearch, query: string): Promise<SearchResult[]> => {
  // Perform Search
  const algoliaResponse = await searchClient
    .searchSingleIndex({
      indexName: algoliaConfig.indexName,
      searchParams: { query: query },
    })
    .catch((err) => {
      showToast(Toast.Style.Failure, "Algolia Error", err.message);
      return undefined;
    });
  if (algoliaResponse == undefined) return [];
  const searchResults: SearchResult[] = [];
  for (const rawResponseItem of algoliaResponse.hits) {
    const searchResponseItemResult = searchResponseItemSchema.safeParse(rawResponseItem);
    if (!searchResponseItemResult.success) {
      console.log(searchResponseItemResult.error);
      console.log("Failed to parse Algolia Response Item ^^^^: ", rawResponseItem);
      continue;
    }
    const searchResponseItem = searchResponseItemResult.data;
    // Build Search Result
    // TODO: Ignore entries like value
    const responseType = searchResponseItem.type;
    const responseTitle = searchResponseItem.anchor || searchResponseItem.hierarchy[responseType];
    if (responseTitle == null) {
      console.log("Failed to find title in Algolia Response Item: ", rawResponseItem);
      continue;
    }
    const responseUrl = searchResponseItem.url;
    const responseHierarchy = Object.values(searchResponseItem.hierarchy).filter((v) => v != null);
    const responseSubTitle = responseHierarchy.join(" > ");
    const responseDocumentPath =
      responseUrl
        .replace(
          "https://grain-lang.org/docs/stdlib/",
          "https://raw.githubusercontent.com/grain-lang/grain/refs/heads/main/stdlib/",
        )
        .replace(/#.*$/, "") + ".md";
    // Try Build Detail
    searchResults.push({
      // TODO: Better Key
      id: responseSubTitle,
      type: responseType,
      hierarchy: responseHierarchy,
      title: responseTitle.replaceAll("-", "."),
      subTitle: responseSubTitle,
      url: responseUrl,
      markdownPath: responseDocumentPath,
    });
  }
  return searchResults;
};
export default function Command() {
  // TODO: Investigate the useNavigation API with the hierarchy levels
  // Hooks
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Create A new Algolia Client
  const searchClient = algoliasearch(algoliaConfig.appId, algoliaConfig.apiKey);
  // Build List Items
  const search = async (query: string) => {
    setIsLoading(true);
    const searchResults = await searchGrainDocumentation(searchClient, query);
    setSearchResults(searchResults);
    setIsLoading(false);
  };
  // Generate Search Items
  const searchItems = [];
  for (const searchResult of searchResults) {
    searchItems.push(<SearchItem key={searchItems.length.toString()} searchResult={searchResult} />);
  }
  // Initial Generation Function
  useEffect(() => {
    search("");
  }, []);
  // TODO: Implement paging
  // Handle Ordering Of Search Results
  // const searchResultHierarchy: SearchResultHierarchy = {};
  // for (const searchResult of searchResults) {
  //   let currentHierarchy = searchResultHierarchy;
  //   for (let i = 0; i < searchResult.hierarchy.length; i++) {
  //     const hierarchyLevel = searchResult.hierarchy[i];
  //     if (i == searchResult.hierarchy.length - 1) {
  //       // Inserting Item
  //       if (currentHierarchy[hierarchyLevel] != undefined) {
  //         console.log("Duplicate Hierarchy Level: ", searchResult.subTitle);
  //       }
  //       currentHierarchy[hierarchyLevel] = searchResult;
  //     } else {
  //       // Inserting Hierarchy Level
  //       let hierarchyIndex = currentHierarchy[hierarchyLevel];
  //       if (hierarchyIndex == undefined) {
  //         hierarchyIndex = {};
  //         currentHierarchy[hierarchyLevel] = hierarchyIndex;
  //       } else if ((hierarchyIndex as SearchResult).id != undefined) {
  //         console.log("Hit Unexpected Search Result: ", searchResult.subTitle);
  //         break;
  //       } else {
  //         currentHierarchy = hierarchyIndex as SearchResultHierarchy;
  //       }
  //     }
  //   }
  // }
  // Generate Search View
  return (
    <List
      isShowingDetail
      throttle={true}
      isLoading={isLoading || searchResults === undefined}
      onSearchTextChange={async (q: string) => await search(q)}
    >
      {searchItems}
    </List>
  );
}
