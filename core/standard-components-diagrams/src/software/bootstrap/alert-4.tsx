import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ALERT_4 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#F4C5CB;strokeWidth=1;fillColor=#F8D6DA;fontColor=#711623;whiteSpace=wrap;align=left;verticalAlign=middle;spacingLeft=10;',
  _width: 800,
  _height: 40,
}

export function Alert4(props: DiagramNodeProps) {
  return <Shape {...ALERT_4} {...props} _style={extendStyle(ALERT_4, props)} />
}
