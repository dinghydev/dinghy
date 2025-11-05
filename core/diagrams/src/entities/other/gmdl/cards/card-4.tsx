import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_4 = {
  _style: {
    entity: 'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;',
  },
  _width: 344,
  _height: 420,
}

export function Card4(props: NodeProps) {
  return <Shape {...CARD_4} {...props} _style={extendStyle(CARD_4, props)} />
}
