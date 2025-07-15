import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const START = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.start_1;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function Start(props: DiagramNodeProps) {
  return <Shape {...START} {...props} />
}
