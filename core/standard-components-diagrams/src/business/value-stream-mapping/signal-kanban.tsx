import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SIGNAL_KANBAN = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.signal_kanban;overflow=fill;',
  _width: 100,
  _height: 90,
}

export function SignalKanban(props: DiagramNodeProps) {
  return (
    <Shape
      {...SIGNAL_KANBAN}
      {...props}
      _style={extendStyle(SIGNAL_KANBAN, props)}
    />
  )
}
