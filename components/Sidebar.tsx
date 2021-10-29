import React from "react";
import { tw } from "twind";
import {
  useGetTableOfContents,
  TableOfContents,
} from "@stoplight/elements-dev-portal";
import { useRouter } from "next/router";
import { NodeLink } from "./NodeLink";
import { MAX_CONTENT_WIDTH, MIN_SIDEBAR_WIDTH } from "./Layout";

export const Sidebar: React.FC<{ nodeSlug: string; activeId: string }> = ({
  nodeSlug,
  activeId,
}) => {
  const { data: toc, isFetched: isTocFetched } = useGetTableOfContents({
    projectId: process.env.NEXT_PUBLIC_STOPLIGHT_PROJECT_ID!,
  });
  const tableOfContents = isTocFetched && toc ? toc : undefined;
  const router = useRouter();

  React.useEffect(() => {
    // Automatically redirect to the first node in the table of contents
    if (!nodeSlug && tableOfContents) {
      const firstNode = tableOfContents.items.find(
        (item) => "slug" in item && item.slug
      );
      if (firstNode) {
        router.replace({
          // @ts-expect-error
          pathname: `/${firstNode.slug}`,
        });
      }
    }
  }, [nodeSlug, tableOfContents, router]);

  return (
    <div
      className={tw`sl-bg-canvas-100 flex flex-col border-r overflow-y-scroll sticky pin-t`}
      style={{
        width: `calc((100% - ${MAX_CONTENT_WIDTH}px) / 2 + ${MIN_SIDEBAR_WIDTH}px)`,
        paddingLeft: `calc((100% - ${MAX_CONTENT_WIDTH}px) / 2)`,
        minWidth: `${MIN_SIDEBAR_WIDTH}px`,
      }}
    >
      {tableOfContents && (
        <TableOfContents
          className={tw`flex-1 text-sm`}
          activeId={activeId}
          tableOfContents={tableOfContents}
          Link={NodeLink}
        />
      )}
    </div>
  );
};
