import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HALF_INDUCTOR = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.half_inductor;',
  _width: 32,
  _height: 23,
}

export function HalfInductor(props: DiagramNodeProps) {
  return (
    <Shape
      {...HALF_INDUCTOR}
      {...props}
      _style={extendStyle(HALF_INDUCTOR, props)}
    />
  )
}
