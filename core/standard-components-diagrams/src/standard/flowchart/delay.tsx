import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DELAY = {
  _style: 'strokeWidth=2;html=1;shape=mxgraph.flowchart.delay;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function Delay(props: DiagramNodeProps) {
  return <Shape {...DELAY} {...props} />
}
