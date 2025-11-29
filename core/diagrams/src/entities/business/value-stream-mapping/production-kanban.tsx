import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRODUCTION_KANBAN = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.production_kanban;overflow=fill;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ProductionKanban(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRODUCTION_KANBAN)} />
}
