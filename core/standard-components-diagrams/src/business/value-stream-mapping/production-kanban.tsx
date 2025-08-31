import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRODUCTION_KANBAN = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.production_kanban;overflow=fill;',
  _width: 60,
  _height: 60,
}

export function ProductionKanban(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRODUCTION_KANBAN}
      {...props}
      _style={extendStyle(PRODUCTION_KANBAN, props)}
    />
  )
}
