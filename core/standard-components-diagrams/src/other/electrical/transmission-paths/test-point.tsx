import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEST_POINT = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.testPoint;',
  _width: 60,
  _height: 130,
}

export function TestPoint(props: DiagramNodeProps) {
  return <Shape {...TEST_POINT} {...props} />
}
