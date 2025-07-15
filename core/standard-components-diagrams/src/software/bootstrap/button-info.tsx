import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_INFO = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#1CA5B8;fontColor=#FFFFFF;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  _width: 50,
  _height: 40,
}

export function ButtonInfo(props: DiagramNodeProps) {
  return <Shape {...BUTTON_INFO} {...props} />
}
