import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_2 = {
  _style: {
    entity: 'shape=rect;fillColor=#BDBDBD;strokeColor=#BDBDBD;shadow=1;',
  },
  _width: 0,
  _height: 230,
}

export function Card2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARD_2)} />
}
