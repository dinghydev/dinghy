import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOOP_LIMIT = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.loop_limit;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function LoopLimit(props: DiagramNodeProps) {
  return <Shape {...LOOP_LIMIT} {...props} />
}
