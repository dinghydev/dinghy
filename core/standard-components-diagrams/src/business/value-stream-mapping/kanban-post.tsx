import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KANBAN_POST = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.kanban_post;',
  _width: 50,
  _height: 100,
}

export function KanbanPost(props: DiagramNodeProps) {
  return (
    <Shape
      {...KANBAN_POST}
      {...props}
      _style={extendStyle(KANBAN_POST, props)}
    />
  )
}
