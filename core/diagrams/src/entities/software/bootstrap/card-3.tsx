import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD_3 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#000000;verticalAlign=bottom;align=left;spacing=20;spacingBottom=130;fontSize=14;',
  },
  _width: 0,
  _height: 450,
}

export function Card3(props: DiagramNodeProps) {
  return <Shape {...CARD_3} {...props} _style={extendStyle(CARD_3, props)} />
}
