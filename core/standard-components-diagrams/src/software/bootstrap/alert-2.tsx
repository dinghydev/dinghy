import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALERT_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#D6D8DB;strokeWidth=1;fillColor=#E2E3E5;fontColor=#383D41;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  _width: 800,
  _height: 40,
}

export function Alert2(props: DiagramNodeProps) {
  return <Shape {...ALERT_2} {...props} />
}
