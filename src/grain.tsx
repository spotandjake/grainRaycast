import { useState } from "react";
import { List, showToast, Toast } from "@raycast/api";
import zod from "zod";
import { algoliasearch, type Algoliasearch } from "algoliasearch";
import SearchItem, { type SearchResult } from "./SearchItem";
// TODO: Look into the Frequency Sorting API
// Zod Schema
enum ResultType {
  lvl0 = "lvl0",
  lvl1 = "lvl1",
  lvl2 = "lvl2",
  lvl3 = "lvl3",
  lvl4 = "lvl4",
}
const resultTypeSchema = zod.nativeEnum(ResultType);
const searchResponseItemSchema = zod.object({
  type: resultTypeSchema,
  hierarchy: zod.record(resultTypeSchema, zod.string().optional()),
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
    console.log(rawResponseItem);
    const searchResponseItemResult = searchResponseItemSchema.safeParse(rawResponseItem);
    if (!searchResponseItemResult.success) {
      console.log(searchResponseItemResult.error);
      console.log("Failed to parse Algolia Response Item ^^^^: ", rawResponseItem);
      continue;
    }
    const searchResponseItem = searchResponseItemResult.data;
    // Build Search Result
    // TODO: Ignore entries like value
    const responseTitle = searchResponseItem.hierarchy[searchResponseItem.type];
    if (responseTitle == null) {
      console.log("Failed to find title in Algolia Response Item: ", rawResponseItem);
      continue;
    }
    const responseUrl = searchResponseItem.url;
    const responseSubTitle = Object.values(searchResponseItem.hierarchy)
      .filter((n) => n != null)
      .join(" > ");
    const responseDocumentPath =
      responseUrl
        .replace(
          "https://grain-lang.org/docs/stdlib/",
          "https://raw.githubusercontent.com/grain-lang/grain/refs/heads/main/stdlib/",
        )
        .replace(/#.*$/, "") + ".md";
    // Try Build Detail
    searchResults.push({
      title: responseTitle,
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
    setSearchResults(await searchGrainDocumentation(searchClient, query));
    setIsLoading(false);
  };
  // Generate Search Items
  const searchItems = [];
  for (const searchResult of searchResults) {
    searchItems.push(<SearchItem searchResult={searchResult} />);
  }
  // Generate Search View
  return (
    <List
      throttle={true}
      isLoading={isLoading || searchResults === undefined}
      onSearchTextChange={async (q: string) => await search(q)}
    >
      {searchItems}
    </List>
  );
}
