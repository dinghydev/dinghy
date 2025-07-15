import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRODUCTION_CONTROL = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.schedule;whiteSpace=wrap;align=center;',
  _width: 100,
  _height: 70,
}

export function ProductionControl(props: DiagramNodeProps) {
  return <Shape {...PRODUCTION_CONTROL} {...props} />
}
