import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUMMATION_POINT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.summation_point;',
  },
  _width: 60,
  _height: 60,
}

export function SummationPoint(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUMMATION_POINT}
      {...props}
      _style={extendStyle(SUMMATION_POINT, props)}
    />
  )
}
