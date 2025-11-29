import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BATCHED_KANBAN = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.batched_kanban;',
  },
  _width: 200,
  _height: 80,
}

export function BatchedKanban(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BATCHED_KANBAN)} />
}
