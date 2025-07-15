import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBTUSE_TRIANGLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.obtuse_triangle;dx=0.25;',
  _width: 100,
  _height: 70,
}

export function ObtuseTriangle(props: DiagramNodeProps) {
  return <Shape {...OBTUSE_TRIANGLE} {...props} />
}
