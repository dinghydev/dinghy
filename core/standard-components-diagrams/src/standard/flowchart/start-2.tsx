import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const START_2 = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.start_2;whiteSpace=wrap;',
  _width: 100,
  _height: 100,
}

export function Start2(props: DiagramNodeProps) {
  return <Shape {...START_2} {...props} />
}
