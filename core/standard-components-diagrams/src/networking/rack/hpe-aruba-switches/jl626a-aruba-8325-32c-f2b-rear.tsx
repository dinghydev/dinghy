import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL626A_ARUBA_8325_32C_F2B_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl626a_aruba_8325_32c_f2b_rear;',
  _width: 142,
  _height: 15,
}

export function Jl626aAruba832532cF2bRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL626A_ARUBA_8325_32C_F2B_REAR}
      {...props}
      _style={extendStyle(JL626A_ARUBA_8325_32C_F2B_REAR, props)}
    />
  )
}
