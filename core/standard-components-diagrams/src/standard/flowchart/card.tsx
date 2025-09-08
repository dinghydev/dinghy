import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=card;whiteSpace=wrap;size=20;arcSize=12;',
  },
  _original_width: 100,
  _original_height: 60,
}

export function Card(props: DiagramNodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
