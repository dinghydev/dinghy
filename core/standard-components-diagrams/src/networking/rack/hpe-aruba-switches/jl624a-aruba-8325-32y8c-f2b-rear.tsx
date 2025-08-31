import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL624A_ARUBA_8325_32Y8C_F2B_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl624a_aruba_8325_32y8c_f2b_rear;',
  _width: 142,
  _height: 15,
}

export function Jl624aAruba832532y8cF2bRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL624A_ARUBA_8325_32Y8C_F2B_REAR}
      {...props}
      _style={extendStyle(JL624A_ARUBA_8325_32Y8C_F2B_REAR, props)}
    />
  )
}
