import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD = {
  _style: {
    entity: 'shape=rect;fillColor=#ffffff;strokeColor=none;shadow=1;',
  },
  _width: 342,
  _height: 356,
}

export function Card(props: NodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
