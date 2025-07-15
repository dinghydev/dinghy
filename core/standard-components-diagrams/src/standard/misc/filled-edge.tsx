import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILLED_EDGE = {
  _style:
    'shape=filledEdge;curved=0;rounded=0;fixDash=1;endArrow=none;strokeWidth=10;fillColor=#ffffff;edgeStyle=orthogonalEdgeStyle;html=1;',
  _width: 60,
  _height: 40,
}

export function FilledEdge(props: DiagramNodeProps) {
  return <Dependency {...FILLED_EDGE} {...props} />
}
