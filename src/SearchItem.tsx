import { ActionPanel, Detail, List, Action, Icon } from "@raycast/api";
// import { useFetch } from "@raycast/utils";

export interface SearchResult {
  title: string;
  subTitle: string;
  url: string;
  markdownPath: string;
}

// function SearchItemDetail(searchResult: SearchResult) {
//   const { isLoading, data, revalidate } = useFetch("https://api.example");

//   return (
//     <Detail
//       isLoading={isLoading}
//       markdown={data}
//       actions={
//         <ActionPanel>
//           <Action title="Reload" onAction={() => revalidate()} />
//         </ActionPanel>
//       }
//     />
//   );
// }
export default function SearchItem({ searchResult }: { searchResult: SearchResult }) {
  // Search Item
  return (
    <List.Item
      // TODO: Better key
      key={searchResult.title}
      // TODO: Consider Icon
      icon={Icon.Bookmark}
      title={searchResult.title}
      subtitle={searchResult.subTitle}
      // TODO: Improve Actions
      actions={
        <ActionPanel>
          <Action.Push
            title="Show Details"
            target={<Detail markdown={`[View Documentation](${searchResult.url})`} />}
          />
        </ActionPanel>
      }
    />
  );
}
