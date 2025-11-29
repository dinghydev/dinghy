import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_11 = {
  _style: {
    entity:
      'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;whiteSpace=wrap;html=1;',
  },
  _width: 342,
  _height: 272,
}

export function Card11(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARD_11)} />
}
