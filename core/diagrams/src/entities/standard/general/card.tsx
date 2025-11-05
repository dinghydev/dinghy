import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD = {
  _style: {
    entity: 'shape=card;whiteSpace=wrap;html=1;',
  },
  _width: 80,
  _height: 100,
}

export function Card(props: NodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
