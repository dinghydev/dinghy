import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { Redirect } from "@docusaurus/router";
import DinghySvg from "@site/static/assets/img/logo.svg";
// import DinghySvg from "@site/static/assets/img/dinghy.svg";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <DinghySvg className={styles.heroLogo} />
          <span className={styles.heroTitleTextHtml}>
            Programmable <b>Diagram</b> and <b>Infrastructure</b> as Code with
            {" "}
            <b>React</b>
          </span>
        </h1>
        <div className={styles.indexCtas}>
          <Link
            className={styles.indexTryMeButton}
            to={"/get-started"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  // return <Redirect to="/get-started/installation" />;
  return (
    <Layout
      title="Welcome"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      {
        /* <main>
        <HomepageFeatures />
      </main> */
      }
    </Layout>
  );
}
