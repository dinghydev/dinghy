import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUALITY_PROBLEM = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.quality_problem;fontSize=24;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 80,
  _height: 100,
}

export function QualityProblem(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUALITY_PROBLEM}
      {...props}
      _style={extendStyle(QUALITY_PROBLEM, props)}
    />
  )
}
