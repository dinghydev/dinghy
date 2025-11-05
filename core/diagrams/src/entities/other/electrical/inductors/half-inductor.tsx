import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HALF_INDUCTOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.half_inductor;',
  },
  _width: 32,
  _height: 23,
}

export function HalfInductor(props: NodeProps) {
  return (
    <Shape
      {...HALF_INDUCTOR}
      {...props}
      _style={extendStyle(HALF_INDUCTOR, props)}
    />
  )
}
