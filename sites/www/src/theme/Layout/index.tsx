// Generated with:
// dinghy site docusaurus -- swizzle --list
// dinghy site docusaurus -- swizzle @docusaurus/theme-classic Layout
// dinghy site docusaurus -- swizzle @docusaurus/theme-classic Logo --danger --wrap

import React, { type ReactNode } from "react";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import type { WrapperProps } from "@docusaurus/types";
import Head from "@docusaurus/Head";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(
  { children, ...props }: Props,
): ReactNode {
  return (
    <>
      <Layout {...props}>
        <Head>
          <link rel="icon" href="/assets/img/favicon.png" sizes="any" />
          <link
            rel="icon"
            href="/assets/img/favicon.svg"
            type="image/svg+xml"
          />
        </Head>
        {children}
      </Layout>
    </>
  );
}
