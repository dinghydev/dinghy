import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALERT_5 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#FFECBC;strokeWidth=1;fillColor=#FFF1CF;fontColor=#856110;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  _width: 800,
  _height: 40,
}

export function Alert5(props: DiagramNodeProps) {
  return <Shape {...ALERT_5} {...props} />
}
