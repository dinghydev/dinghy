import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KANBAN_POST = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.kanban_post;',
  },
  _width: 50,
  _height: 100,
}

export function KanbanPost(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KANBAN_POST)} />
}
