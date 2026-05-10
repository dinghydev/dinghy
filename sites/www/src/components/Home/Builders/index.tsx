import clsx from 'clsx'
import DocusaurusSvg from './docusaurus.svg'
import RevealjsSvg from './revealjs.svg'
import DockerSvg from './docker.svg'
import styles from './styles.module.css'

export default function Builders() {
  return (
    <div
      className={clsx(
        styles.container,
      )}
      id='builders'
    >
      <h2
        className={styles.title}
      >
        <a href='/guides/get-started/builders'>
          Builders
        </a>
      </h2>
      <div
        className={clsx(
          styles.grid,
        )}
      >
        <div className={styles.gridContent}>
          <h3 className={styles.itemTitle}>
            <a href='/guides/get-started/builders/site-builder'>
              Site with
            </a>
          </h3>
          <a
            href='/guides/get-started/builders/site-builder'
            className={clsx(styles.poweredBy, styles.docusaurus)}
          >
            <DocusaurusSvg /> <b>docusaurus.io</b>
          </a>
        </div>
        <div className={styles.gridContent}>
          <h3 className={styles.itemTitle}>
            <a href='/guides/get-started/builders/slide-builder'>
              Slide with
            </a>
          </h3>
          <a
            href='/guides/get-started/builders/slide-builder'
            className={clsx(styles.poweredBy, styles.revealjs)}
          >
            <RevealjsSvg />
          </a>
        </div>
        <div className={styles.gridContent}>
          <h3 className={styles.itemTitle}>
            <a href='/guides/get-started/builders/docker-image-builder'>
              Docker Image with
            </a>
          </h3>
          <a
            href='/guides/get-started/builders/docker-image-builder'
            className={clsx(styles.poweredBy, styles.docker)}
          >
            <DockerSvg />
          </a>
        </div>
      </div>
    </div>
  )
}
