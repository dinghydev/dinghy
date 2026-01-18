import TwoColumn from '../../TwoColumn/index.tsx'
import CodeBlock from '@theme/CodeBlock'
import AppTfJson from '!!raw-loader!./stack.tf.json'
import TerraformLogo from './terraform.png'
import OpenTofuSvg from './opentofu.svg'
import DenoSvg from './deno.svg'
import ReactSvg from './react.svg'
import styles from './styles.module.css'
import clsx from 'clsx'
export default function InfrastructureAsCode() {
  return (
    <TwoColumn
      title={
        <a href='/guides/get-started/infrastructure-as-code'>
          Infrastructure as Code
        </a>
      }
      subTitle={
        <div>
          <div className={styles.text}>
            supports
          </div>
          <div>
            <img
              className={styles.logos}
              src={TerraformLogo}
              alt='Terraform Logo'
            />
            <OpenTofuSvg
              alt='OpenTofu Logo'
              className={clsx(styles.logos, styles.opentofuLogo)}
            />
          </div>
          <div>
            <h3>Instead of writing</h3>
            <h3 className={styles.consText}>
              HashiCorp <span>configuration language</span> (HCL)
            </h3>
            <h3>You use full-fledged</h3>
            <h3 className={styles.proText}>
              programming language TypeScript
            </h3>
          </div>
          <div className={styles.text}>
            powered by
          </div>
          <div>
            <DenoSvg
              title='Deno.com'
              className={clsx(styles.logos)}
            />
            <ReactSvg
              className={clsx(styles.logos, styles.reactLogo)}
            />
          </div>
        </div>
      }
      background
      bodyAlign='right'
    >
      <CodeBlock language='json' title='stack.tf.json'>
        {AppTfJson}
      </CodeBlock>
    </TwoColumn>
  )
}
