import clsx from 'clsx'
import Ec2Svg from './ec2.svg'
import CloudFrontSvg from './cloudfront.svg'
import LambdaSvg from './lambda.svg'
import styles from './styles.module.css'

export default function ShowCases() {
  return (
    <div
      className={clsx(
        styles.container,
      )}
      id='show-cases'
    >
      <h2
        className={styles.title}
      >
        <a href='/show-cases'>
          Show Cases
        </a>
        <div>
          Discover fully functional examples to explore Dinghy 🚀
        </div>
      </h2>
      <div
        className={clsx(
          styles.grid,
        )}
      >
        <div className={styles.gridContent}>
          <a href='/show-cases/ec2-servers'>
            <Ec2Svg />
            <span>EC2 Servers</span>
          </a>
        </div>
        <div className={styles.gridContent}>
          <a href='/show-cases/cloudfront-sites'>
            <CloudFrontSvg />
            <span>CloudFront Sites</span>
          </a>
        </div>
        <div className={styles.gridContent}>
          <a href='/show-cases/typescript-lambda'>
            <LambdaSvg />
            <span>TypeScript Lambda</span>
          </a>
        </div>
      </div>
    </div>
  )
}
