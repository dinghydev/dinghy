import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD_GROUP_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#000000;verticalAlign=top;align=left;spacing=20;spacingBottom=0;fontSize=14;spacingTop=160;',
  },
  _width: 0,
  _height: 360,
}

export function CardGroup2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARD_GROUP_2}
      {...props}
      _style={extendStyle(CARD_GROUP_2, props)}
    />
  )
}
