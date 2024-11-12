import { useEffect, useState, type ReactNode } from "react";
import { ActionPanel, Detail, List, Action, Color } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import zod from "zod";
import { gfmTable } from "micromark-extension-gfm-table";
import { fromMarkdown } from "mdast-util-from-markdown";
import { gfmTableFromMarkdown, gfmTableToMarkdown } from "mdast-util-gfm-table";
import { toMarkdown } from "mdast-util-to-markdown";
import { toString } from "mdast-util-to-string";
import { type RootContent } from "mdast";

export enum ResultType {
  lvl0 = "lvl0",
  lvl1 = "lvl1",
  lvl2 = "lvl2",
  lvl3 = "lvl3",
  lvl4 = "lvl4",
  lvl5 = "lvl5",
  lvl6 = "lvl6",
  content = "content",
}
export interface SearchResult {
  id: string;
  type: ResultType;
  hierarchy: string[];
  title: string;
  subTitle: string;
  url: string;
  markdownPath: string;
}
export default function SearchItem({ searchResult }: { key: string; searchResult: SearchResult }) {
  const title = searchResult.title.trim();
  const { isLoading, data } = useFetch(searchResult.markdownPath);
  const [detailData, setDetailData] = useState<string | undefined>(undefined);
  const [metaData, setMetaData] = useState<ReactNode[] | undefined>(undefined);
  useEffect(() => {
    // TODO: Detect if data errored
    if (data == undefined) return;
    const strData = zod.string().safeParse(data);
    if (!strData.success) {
      console.log("Error parsing document data");
      return;
    }
    // Parse The Markdown
    const rootNode = fromMarkdown(strData.data, {
      extensions: [gfmTable()],
      mdastExtensions: [gfmTableFromMarkdown()],
    });
    const headingChildren: RootContent[] = [];
    let isDesiredHeading = false;
    for (const node of rootNode.children) {
      switch (node.type) {
        case "heading":
          isDesiredHeading = title == toString(node).trim();
          break;
      }
      if (isDesiredHeading) headingChildren.push(node);
    }
    if (headingChildren.length != 0) rootNode.children = headingChildren;
    // Clean Tree
    const rootChildren: RootContent[] = [];
    const metaDataItems: ReactNode[] = [];
    setMetaData(undefined);
    for (const node of rootNode.children) {
      switch (node.type) {
        case "heading":
          if (isDesiredHeading) node.depth = 1;
          metaDataItems.push(
            <List.Item.Detail.Metadata.Link
              key={metaDataItems.length.toString()}
              title={toString(node)}
              text={"View Documentation"}
              target={searchResult.url}
            />,
          );
          metaDataItems.push(<List.Item.Detail.Metadata.Separator key={metaDataItems.length.toString()} />);
          break;
        case "table": {
          let signatureItem: "Parameters" | "Returns" | false = false;
          for (let i = 0; i < node.children.length; i++) {
            // Check if signatureTable
            const tableRow = node.children[i];
            if (i == 0) {
              const tableHeaders = tableRow.children.map((tableCell) => toString(tableCell).trim());
              // Parameter Table
              if (tableHeaders.length == 3 && ["param", "type", "description"].every((a, i) => a == tableHeaders[i]))
                signatureItem = "Parameters";
              else if (tableHeaders.length == 2 && ["type", "description"].every((a, i) => a == tableHeaders[i]))
                signatureItem = "Returns";
              if (signatureItem != false) {
                metaDataItems.push(
                  <List.Item.Detail.Metadata.Label key={metaDataItems.length.toString()} title={signatureItem} />,
                );
              }
            } else if (signatureItem != false) {
              // Parameter Table
              const tableCells = tableRow.children.map((tableCell) => toString(tableCell).trim());
              switch (signatureItem) {
                case "Parameters":
                  metaDataItems.push(
                    <List.Item.Detail.Metadata.Label
                      key={metaDataItems.length.toString()}
                      title={tableCells[0]}
                      text={{ color: Color.Orange, value: tableCells[1] }}
                    />,
                  );
                  break;
                case "Returns":
                  metaDataItems.push(
                    <List.Item.Detail.Metadata.Label
                      key={metaDataItems.length.toString()}
                      title={tableCells[0]}
                      text={{ color: Color.Orange, value: tableCells[1] }}
                    />,
                  );
                  break;
              }
            }
          }
          if (signatureItem != false)
            metaDataItems.push(<List.Item.Detail.Metadata.Separator key={metaDataItems.length.toString()} />);
          break;
        }
        case "html":
          if (node.type == "html") continue;
          // TODO: Build MetaData
          break;
        // default:
        //   console.log(node.type);
      }
      rootChildren.push(node);
    }
    if (headingChildren.length > 0) setMetaData(metaDataItems);
    rootNode.children = rootChildren;
    // Back to markdown
    const markdownContent = toMarkdown(rootNode, { extensions: [gfmTableToMarkdown()] });
    setDetailData(markdownContent);
  }, [data]);
  // Search Item
  return (
    <List.Item
      key={searchResult.id}
      title={searchResult.title}
      subtitle={searchResult.subTitle}
      // TODO: Improve Actions
      detail={
        detailData != undefined && (
          <List.Item.Detail
            isLoading={isLoading}
            markdown={metaData == undefined ? detailData : undefined}
            metadata={metaData != undefined && <List.Item.Detail.Metadata>{metaData}</List.Item.Detail.Metadata>}
          />
        )
      }
      actions={
        <ActionPanel>
          <Action.Push title="Show Details" target={<Detail markdown={detailData} />} />
        </ActionPanel>
      }
    />
  );
}
