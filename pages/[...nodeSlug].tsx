import {
  getNodeContent,
  Node,
  NodeContentProps,
} from "@stoplight/elements-dev-portal";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import * as React from "react";
import { useRouter } from "next/router";
import { getLayout } from "../components/Layout";

import { Loading } from "../components/Loading";
import { NotFound } from "../components/NotFound";

import "@stoplight/elements-dev-portal/styles.min.css";
import { NodeLink } from "../components/NodeLink";

const NodeContent = dynamic<NodeContentProps>(
  () => import("@stoplight/elements-dev-portal").then((mod) => mod.NodeContent),
  {
    ssr: false,
  }
);

type DocsPageProps = {
  title: string;
  description?: string;
  nodeSlug: string;
  node?: Node;
};

export const getStaticProps: GetStaticProps<DocsPageProps> = async (ctx) => {
  const nodeSlug = String(ctx.params?.nodeSlug || "");

  let props: DocsPageProps = {
    title: "",
    description: "",
    nodeSlug,
  };

  if (nodeSlug) {
    try {
      const node = await getNodeContent({
        projectId: process.env.NEXT_PUBLIC_STOPLIGHT_PROJECT_ID!,
        nodeSlug,
      });

      props = {
        ...props,
        title: node.title,
        description: node.summary,
        node,
      };
    } catch (error) {
      // TODO: throw error with a code so we can distinguish not found from other errors
      console.error("docs.fetchNode.getStaticProps");
      props = {
        title: "Not Found",
        nodeSlug,
      };
    }
  }

  return {
    revalidate: 60,
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    // this generates static pages on demand, with re-build according to `revalidate` seconds prop above
    fallback: "blocking",
  };
};

function DocsPage({
  node,
  nodeSlug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  React.useEffect(() => console.info("DocsPage.mount"), []);
  console.info("DocsPage.render");

  let elem;
  const router = useRouter();
  if (router.isFallback || !nodeSlug) {
    elem = <Loading />;
  } else if (!node) {
    elem = <NotFound />;
  } else {
    elem = <NodeContent node={node} Link={NodeLink} />;
  }

  return elem;
}

DocsPage.getLayout = getLayout;

export default DocsPage;
