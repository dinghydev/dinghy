import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WITHDRAWAL_KANBAN = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.withdrawal_kanban;overflow=fill;',
  _width: 100,
  _height: 100,
}

export function WithdrawalKanban(props: DiagramNodeProps) {
  return <Shape {...WITHDRAWAL_KANBAN} {...props} />
}
