import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_2 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#000000;verticalAlign=top;align=left;spacing=20;fontSize=14;',
  _width: 0,
  _height: 190,
}

export function Card2(props: DiagramNodeProps) {
  return <Shape {...CARD_2} {...props} _style={extendStyle(CARD_2, props)} />
}
