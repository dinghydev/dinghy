import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL625A_ARUBA_8325_32Y_8C_B2F_FRONT = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl625a_aruba_8325_32y_8c_b2f_front;',
  _width: 142,
  _height: 15,
}

export function Jl625aAruba832532y8cB2fFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL625A_ARUBA_8325_32Y_8C_B2F_FRONT}
      {...props}
      _style={extendStyle(JL625A_ARUBA_8325_32Y_8C_B2F_FRONT, props)}
    />
  )
}
