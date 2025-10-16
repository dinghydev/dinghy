import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BATCHED_KANBAN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.batched_kanban;',
  },
  _width: 200,
  _height: 80,
}

export function BatchedKanban(props: DiagramNodeProps) {
  return (
    <Shape
      {...BATCHED_KANBAN}
      {...props}
      _style={extendStyle(BATCHED_KANBAN, props)}
    />
  )
}
