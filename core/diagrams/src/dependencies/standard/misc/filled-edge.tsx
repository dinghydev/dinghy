import { Dependency, extendStyle } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FILLED_EDGE = {
  _style: {
    dependency:
      'shape=filledEdge;curved=0;rounded=0;fixDash=1;endArrow=none;strokeWidth=10;fillColor=#ffffff;edgeStyle=orthogonalEdgeStyle;html=1;',
  },
}

export function FilledEdge(props: DiagramNodeProps) {
  return (
    <Dependency
      {...FILLED_EDGE}
      {...props}
      _style={extendStyle(FILLED_EDGE, props)}
    />
  )
}
