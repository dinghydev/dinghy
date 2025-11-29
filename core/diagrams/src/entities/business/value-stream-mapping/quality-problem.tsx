import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUALITY_PROBLEM = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.quality_problem;fontSize=24;fontStyle=1;whiteSpace=wrap;align=center;',
  },
  _width: 80,
  _height: 100,
}

export function QualityProblem(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, QUALITY_PROBLEM)} />
}
