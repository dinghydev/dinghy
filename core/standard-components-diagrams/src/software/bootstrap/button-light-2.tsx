import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_LIGHT_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#F8F9FA;strokeWidth=1;fillColor=none;fontColor=#F8F9FA;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  _width: 60,
  _height: 40,
}

export function ButtonLight2(props: DiagramNodeProps) {
  return <Shape {...BUTTON_LIGHT_2} {...props} />
}
