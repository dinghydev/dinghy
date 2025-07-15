import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PENTAGON = {
  _style: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.pentagon',
  _width: 100,
  _height: 90,
}

export function Pentagon(props: DiagramNodeProps) {
  return <Shape {...PENTAGON} {...props} />
}
