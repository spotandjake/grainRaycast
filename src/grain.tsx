import { useEffect, useState } from "react";
import { List, showToast, Toast } from "@raycast/api";
import zod from "zod";
import { algoliasearch, type Algoliasearch } from "algoliasearch";
import SearchItem, { type SearchResult, ResultType } from "./SearchItem";
// TODO: Look into the Frequency Sorting API
// Zod Schema
interface SearchResultHierarchy {
  type: "SearchResultHierarchy";
  title: string;
  children: {
    [key: string]: SearchResultHierarchy | SearchResult;
  };
}
const resultTypeSchema = zod.nativeEnum(ResultType);
const searchResponseItemSchema = zod.object({
  type: resultTypeSchema,
  anchor: zod.string().optional(),
  hierarchy: zod.record(resultTypeSchema, zod.string().nullable()),
  objectID: zod.string(),
  url_without_anchor: zod.string(),
});
// Algolia Config
const algoliaConfig = {
  appId: "CDP8WGS04L",
  apiKey: "fb27c36015ee3fd18739deeb1be5f71b",
  indexName: "grain-lang",
};

// Algolia Search Helper
const searchGrainDocumentation = async (
  searchClient: Algoliasearch,
  query: string,
): Promise<SearchResultHierarchy | undefined> => {
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
  if (algoliaResponse == undefined) return undefined;
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
    const _responseTitle = searchResponseItem.anchor || searchResponseItem.hierarchy[responseType];
    if (_responseTitle == null) {
      console.log("Failed to find title in Algolia Response Item: ", rawResponseItem);
      continue;
    }
    const responseTitle = _responseTitle.trim();
    const responseUrl = searchResponseItem.url_without_anchor;
    const responseHierarchy = Object.values(searchResponseItem.hierarchy).filter((v) => v != null);
    const responseSubTitle = responseHierarchy.slice(1).join(" > ");
    const responseDocumentPath =
      responseUrl.replace(
        "https://grain-lang.org/docs/stdlib/",
        "https://raw.githubusercontent.com/grain-lang/grain/refs/heads/main/stdlib/",
      ) + ".md";
    // Filter Out Unwanted Results
    if (["all-content-wrapper", "Values"].includes(responseTitle)) {
      continue;
    }
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
  // Build Search Hierarchy
  const searchResultHierarchy: SearchResultHierarchy = { type: "SearchResultHierarchy", title: "Root", children: {} };
  for (const searchResult of searchResults.reverse()) {
    let currentHierarchy = searchResultHierarchy;
    for (let i = 0; i < searchResult.hierarchy.length; i++) {
      const hierarchyLevel = searchResult.hierarchy[i];
      if (i == searchResult.hierarchy.length - 1) {
        // Inserting Item
        if (currentHierarchy.children[hierarchyLevel] != undefined) {
          continue;
        }
        currentHierarchy.children[hierarchyLevel] = searchResult;
      } else {
        // Inserting Hierarchy Level
        let hierarchyIndex = currentHierarchy.children[hierarchyLevel];
        if (hierarchyIndex == undefined) {
          hierarchyIndex = { type: "SearchResultHierarchy", title: hierarchyLevel, children: {} };
          currentHierarchy.children[hierarchyLevel] = hierarchyIndex;
        } else if (hierarchyIndex.type != "SearchResultHierarchy") {
          console.log("Hit Unexpected Search Result: ", searchResult.subTitle);
          break;
        } else {
          currentHierarchy = hierarchyIndex;
        }
      }
    }
  }
  return searchResultHierarchy;
};
interface SearchResultHierarchyProps {
  key: string;
  id: string;
  searchResultHierarchy: SearchResultHierarchy | undefined;
  isRoot: boolean;
}
function SearchHierarchy({ id, searchResultHierarchy, isRoot }: SearchResultHierarchyProps) {
  if (searchResultHierarchy == undefined) return [];
  const searchItems: React.ReactElement[] = [];
  const containsSearchResults = Object.values(searchResultHierarchy.children).some(
    (v) => (v as SearchResult).id != undefined,
  );
  for (const [title, value] of Object.entries(searchResultHierarchy.children)) {
    const childKey = `${id} > ${title}`;
    if (value.type != "SearchResultHierarchy") {
      searchItems.push(<SearchItem key={childKey} searchResult={value} />);
    } else if (isRoot && containsSearchResults && !["Documentation", "Root"].includes(searchResultHierarchy.title)) {
      // TODO: use action panel to allow navigation of the hierarchy
      searchItems.push(
        <List.Section key={childKey} title={searchResultHierarchy.title}>
          {<SearchHierarchy key={childKey} id={childKey} searchResultHierarchy={value} isRoot={false} />}
        </List.Section>,
      );
    } else {
      // TODO: Make Header Better
      if (containsSearchResults && !["Values", "Root", "Documentation"].includes(searchResultHierarchy.title))
        searchItems.push(<List.Item key={`${childKey}--Title`} title={searchResultHierarchy.title} />);
      searchItems.push(<SearchHierarchy key={childKey} id={childKey} searchResultHierarchy={value} isRoot={isRoot} />);
    }
  }
  return searchItems;
}
export default function Command() {
  // TODO: Investigate the useNavigation API with the hierarchy levels
  // TODO: Implement Pagination
  // Hooks
  const [searchResults, setSearchResults] = useState<SearchResultHierarchy | undefined>(undefined);
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
  // Initial Generation Function
  useEffect(() => {
    search("");
  }, []);
  // Generate Search View
  // console.log(searchResults);
  return (
    <List
      isShowingDetail
      throttle={true}
      isLoading={isLoading || searchResults === undefined}
      onSearchTextChange={async (q: string) => await search(q)}
    >
      {<SearchHierarchy key="Root" id="Root" searchResultHierarchy={searchResults} isRoot={true} />}
    </List>
  );
}
