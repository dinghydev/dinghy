import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_GROUP = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;',
  },
  _width: 0,
  _height: 360,
}

export function CardGroup(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARD_GROUP)} />
}
