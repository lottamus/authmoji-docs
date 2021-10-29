import React from "react";
import { tw } from "twind";
import { useRouter } from "next/router";
import Link from "next/link";

export const NodeLink = ({ className, to, children, hash }: any) => {
  const router = useRouter();

  return (
    <Link
      href={{
        pathname: router.route,
        query: {
          ...router.query,
          nodeSlug: to,
        },
        hash,
      }}
      passHref
    >
      <a className={tw`no-underline ${className}`}>{children}</a>
    </Link>
  );
};
