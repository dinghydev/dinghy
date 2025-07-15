import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEQUENTIAL_DATA = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.sequential_data;whiteSpace=wrap;',
  _width: 100,
  _height: 100,
}

export function SequentialData(props: DiagramNodeProps) {
  return <Shape {...SEQUENTIAL_DATA} {...props} />
}
