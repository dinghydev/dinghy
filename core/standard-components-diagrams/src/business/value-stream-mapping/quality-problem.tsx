import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUALITY_PROBLEM = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.quality_problem;fontSize=24;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 80,
  _height: 100,
}

export function QualityProblem(props: DiagramNodeProps) {
  return <Shape {...QUALITY_PROBLEM} {...props} />
}
