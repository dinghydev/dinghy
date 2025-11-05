import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=card;whiteSpace=wrap;size=20;arcSize=12;',
  },
  _width: 100,
  _height: 60,
}

export function Card(props: NodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
