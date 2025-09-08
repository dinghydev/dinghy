import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARD = {
  _style: {
    entity: 'shape=rect;fillColor=#ffffff;strokeColor=none;shadow=1;',
  },
  _original_width: 342,
  _original_height: 356,
}

export function Card(props: DiagramNodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
