import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD_11 = {
  _style: {
    entity:
      'shape=rect;fillColor=#ffffff;strokeColor=#eeeeee;shadow=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 342,
  _original_height: 272,
}

export function Card11(props: DiagramNodeProps) {
  return <Shape {...CARD_11} {...props} _style={extendStyle(CARD_11, props)} />
}
