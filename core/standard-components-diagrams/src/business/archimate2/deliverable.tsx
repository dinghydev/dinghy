import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DELIVERABLE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffe0e0;shape=mxgraph.archimate.representation',
  _width: 100,
  _height: 75,
}

export function Deliverable(props: DiagramNodeProps) {
  return <Shape {...DELIVERABLE} {...props} />
}
