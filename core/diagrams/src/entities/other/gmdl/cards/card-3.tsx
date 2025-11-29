import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_3 = {
  _style: {
    entity: 'shape=rect;fillColor=#BDBDBD;strokeColor=#eeeeee;shadow=1;html=1;',
  },
  _width: 342,
  _height: 378,
}

export function Card3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CARD_3)} />
}
