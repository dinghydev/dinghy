import TwoColumn from '../../TwoColumn/index.tsx'
import CodeBlock from '@theme/CodeBlock'
import AppTsx from '!!raw-loader!./app.tsx'
import diagramUrl from '../../../docs/examples/step-by-step/step-3-draw-io/output/step-3-draw-io.png'
import DrawioSvg from './drawio.svg'
import styles from './styles.module.css'
export default function DiagramAsCode() {
  return (
    <TwoColumn
      title={<a href='/guides/get-started/diagram-as-code'>Diagram as Code</a>}
      subTitle={
        <div>
          <div className={styles.poweredBy}>
            powered by <DrawioSvg /> <b>draw.io</b>
          </div>
          <div>
            <img
              src={diagramUrl}
              className={styles.diagramImage}
              alt='Diagram as Code with Dinghy'
              fetchPriority='high'
              width='95%'
              height='auto'
            />
          </div>
        </div>
      }
      bodyAlign='left'
    >
      <CodeBlock language='tsx' title='app.tsx'>
        {AppTsx}
      </CodeBlock>
    </TwoColumn>
  )
}
