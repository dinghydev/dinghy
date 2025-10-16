import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEMORY_CARD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.memory_card',
  },
  _original_width: 93,
  _original_height: 100,
}

export function MemoryCard(props: DiagramNodeProps) {
  return (
    <Shape
      {...MEMORY_CARD}
      {...props}
      _style={extendStyle(MEMORY_CARD, props)}
    />
  )
}
