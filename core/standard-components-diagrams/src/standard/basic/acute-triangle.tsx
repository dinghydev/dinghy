import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACUTE_TRIANGLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.acute_triangle;dx=0.5;',
  _width: 100,
  _height: 70,
}

export function AcuteTriangle(props: DiagramNodeProps) {
  return <Shape {...ACUTE_TRIANGLE} {...props} />
}
