import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const QUALITY_PROBLEM = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.quality_problem;fontSize=24;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _original_width: 80,
  _original_height: 100,
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
