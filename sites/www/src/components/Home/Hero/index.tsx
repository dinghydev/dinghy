import Link from "@docusaurus/Link";
import DinghySvg from "@site/static/assets/img/logo.svg";

import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <DinghySvg className={styles.heroLogo} />
        <h1 className={styles.heroProjectTagline}>
          <span className={styles.heroTitleTextHtml}>
            Programmable <b>Diagram</b> and <b>Infrastructure</b> as Code with
            {" "}
            <b>React</b>
          </span>
        </h1>
        <div className={styles.indexCtas}>
          <Link
            className={styles.getStartedButton}
            to={"/get-started"}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
