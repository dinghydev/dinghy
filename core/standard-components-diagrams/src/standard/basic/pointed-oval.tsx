import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POINTED_OVAL = {
  _style: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.pointed_oval',
  _width: 50,
  _height: 100,
}

export function PointedOval(props: DiagramNodeProps) {
  return <Shape {...POINTED_OVAL} {...props} />
}
