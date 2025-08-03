import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILLED_EDGE = {
  _style: {
    dependency:
      'shape=filledEdge;curved=0;rounded=0;fixDash=1;endArrow=none;strokeWidth=10;fillColor=#ffffff;edgeStyle=orthogonalEdgeStyle;html=1;',
  },
}

export function FilledEdge(props: DiagramNodeProps) {
  return <Dependency {...FILLED_EDGE} {...props} />
}
