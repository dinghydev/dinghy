import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALERT_8 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#C6C8CA;strokeWidth=1;fillColor=#D6D8D9;fontColor=#1B1E21;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  _width: 800,
  _height: 40,
}

export function Alert8(props: DiagramNodeProps) {
  return <Shape {...ALERT_8} {...props} />
}
