import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SIGNAL_KANBAN = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.signal_kanban;overflow=fill;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function SignalKanban(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SIGNAL_KANBAN)} />
}
