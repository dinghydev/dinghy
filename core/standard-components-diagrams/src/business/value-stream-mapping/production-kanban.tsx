import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRODUCTION_KANBAN = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.production_kanban;overflow=fill;',
  _width: 100,
  _height: 100,
}

export function ProductionKanban(props: DiagramNodeProps) {
  return <Shape {...PRODUCTION_KANBAN} {...props} />
}
