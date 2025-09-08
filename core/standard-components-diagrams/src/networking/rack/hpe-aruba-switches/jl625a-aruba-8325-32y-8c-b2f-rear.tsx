import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL625A_ARUBA_8325_32Y_8C_B2F_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl625a_aruba_8325_32y_8c_b2f_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl625aAruba832532y8cB2fRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL625A_ARUBA_8325_32Y_8C_B2F_REAR}
      {...props}
      _style={extendStyle(JL625A_ARUBA_8325_32Y_8C_B2F_REAR, props)}
    />
  )
}
