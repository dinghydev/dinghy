import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CARD = {
  _style: {
    entity: 'shape=card;whiteSpace=wrap;html=1;',
  },
  _original_width: 80,
  _original_height: 100,
}

export function Card(props: DiagramNodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
