import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUMMATION_POINT = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.summation_point;',
  _width: 50,
  _height: 50,
}

export function SummationPoint(props: DiagramNodeProps) {
  return <Shape {...SUMMATION_POINT} {...props} />
}
