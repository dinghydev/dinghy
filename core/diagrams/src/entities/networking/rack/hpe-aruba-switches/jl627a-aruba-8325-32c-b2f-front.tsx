import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL627A_ARUBA_8325_32C_B2F_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl627a_aruba_8325_32c_b2f_front;',
  },
  _width: 142,
  _height: 15,
}

export function Jl627aAruba832532cB2fFront(props: NodeProps) {
  return (
    <Shape
      {...JL627A_ARUBA_8325_32C_B2F_FRONT}
      {...props}
      _style={extendStyle(JL627A_ARUBA_8325_32C_B2F_FRONT, props)}
    />
  )
}
