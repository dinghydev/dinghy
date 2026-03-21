import TwoColumn from '../../TwoColumn/index.tsx'
import DocusaurusSvg from './docusaurus.svg'
import RevealjsSvg from './revealjs.svg'
import styles from './styles.module.css'
import clsx from 'clsx'
export default function StarAsCode() {
  return (
    <TwoColumn
      subTitle={
        <div className={styles.starAsCode}>
          <h2>
            <a href='/guides/get-started/documentation-as-code'>
              Documentation as Code
            </a>
          </h2>
          <div className={clsx(styles.poweredBy, styles.docusaurus)}>
            with <DocusaurusSvg /> <b>docusaurus.io</b>
          </div>
        </div>
      }
      bodyAlign='right'
    >
      <div className={styles.starAsCode}>
        <h2>
          <a href='/guides/get-started/slide-as-code'>
            Slide as Code
          </a>
        </h2>
        <div className={clsx(styles.poweredBy, styles.revealjs)}>
          with <RevealjsSvg />
        </div>
      </div>
    </TwoColumn>
  )
}
