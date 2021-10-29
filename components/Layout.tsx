import React from "react";
import { tw } from "twind";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MAX_CONTENT_WIDTH = 1500;
export const MIN_SIDEBAR_WIDTH = 280;

const maxContentWidth = `calc(${MAX_CONTENT_WIDTH}px - 96px - max(${MIN_SIDEBAR_WIDTH}px, ((100% - ${MAX_CONTENT_WIDTH}px) / 2 + ${MIN_SIDEBAR_WIDTH}px)))`;

type LayoutProps = { nodeSlug: string; node?: { id: string } };

const Layout: React.FC<LayoutProps> = ({ children, nodeSlug, node }) => {
  return (
    <div>
      <div
        className={tw`text-gray-900 bg-white dark:(bg-gray-900 text-white) flex flex-col min-h-screen`}
      >
        <Header />

        <div className={tw`relative flex-1 flex flex-grow border-t`}>
          <div className={tw`flex absolute inset-0 overflow-y-scroll`}>
            <Sidebar nodeSlug={nodeSlug} activeId={node?.id || ""} />

            <main
              className={tw`flex-grow flex-1 overflow-y-auto overflow-x-hidden pl-24 pr-10`}
            >
              <div
                className={tw`pt-16 pb-24`}
                style={{ maxWidth: maxContentWidth }}
              >
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getLayout = (
  page: React.ReactElement,
  layoutProps: LayoutProps
) => <Layout {...layoutProps}>{page}</Layout>;
