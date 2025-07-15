import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DECISION = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.decision;whiteSpace=wrap;',
  _width: 100,
  _height: 100,
}

export function Decision(props: DiagramNodeProps) {
  return <Shape {...DECISION} {...props} />
}
