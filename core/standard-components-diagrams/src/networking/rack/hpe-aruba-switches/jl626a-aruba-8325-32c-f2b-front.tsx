import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL626A_ARUBA_8325_32C_F2B_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl626a_aruba_8325_32c_f2b_front;',
  },
  _width: 142,
  _height: 15,
}

export function Jl626aAruba832532cF2bFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL626A_ARUBA_8325_32C_F2B_FRONT}
      {...props}
      _style={extendStyle(JL626A_ARUBA_8325_32C_F2B_FRONT, props)}
    />
  )
}
