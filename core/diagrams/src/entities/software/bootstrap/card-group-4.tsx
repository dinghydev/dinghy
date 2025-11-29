import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_GROUP_4 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#0085FC;fontColor=#FFFFFF;verticalAlign=top;align=center;spacing=10;fontSize=14;',
  },
  _width: 3,
  _height: 600,
}

export function CardGroup4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARD_GROUP_4)} />
}
