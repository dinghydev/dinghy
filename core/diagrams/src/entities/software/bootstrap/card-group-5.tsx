import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_GROUP_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#000000;verticalAlign=top;align=center;spacing=10;spacingBottom=0;fontSize=14;spacingTop=0;',
  },
  _width: 4,
  _height: 600,
}

export function CardGroup5(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARD_GROUP_5)} />
}
