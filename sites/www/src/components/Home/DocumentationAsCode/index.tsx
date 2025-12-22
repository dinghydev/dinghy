import TwoColumn from "../../TwoColumn/index.tsx";
import DocusaurusSvg from "./docusaurus.svg";
import styles from "./styles.module.css";
export default function DocumentationAsCode() {
  return (
    <TwoColumn
      title={
        <a href="/guides/get-started/documentation-as-code">
          Documentation as Code
        </a>
      }
      subTitle={
        <div className={styles.site}>
          You get <b>Zero configuration</b> site like this for free
        </div>
      }
      bodyAlign="right"
    >
      <div className={styles.poweredBy}>
        powered by <DocusaurusSvg /> <b>docusaurus.io</b>
      </div>
    </TwoColumn>
  );
}
