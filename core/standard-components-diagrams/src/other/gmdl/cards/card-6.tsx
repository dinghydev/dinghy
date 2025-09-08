import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD_6 = {
  _style: {
    entity:
      'shape=rect;fillColor=#BDBDBD;strokeColor=#eeeeee;shadow=1;html=1;whiteSpace=wrap;',
  },
  _original_width: 342,
  _original_height: 246,
}

export function Card6(props: DiagramNodeProps) {
  return <Shape {...CARD_6} {...props} _style={extendStyle(CARD_6, props)} />
}
