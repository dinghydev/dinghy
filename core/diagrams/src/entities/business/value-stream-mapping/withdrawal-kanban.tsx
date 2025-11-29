import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WITHDRAWAL_KANBAN = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.withdrawal_kanban;overflow=fill;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function WithdrawalKanban(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WITHDRAWAL_KANBAN)} />
}
