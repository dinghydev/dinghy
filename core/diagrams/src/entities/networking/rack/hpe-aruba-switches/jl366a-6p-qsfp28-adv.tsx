import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL366A_6P_QSFP28_ADV = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl366a_6p_qsfp28_adv;',
  },
  _width: 14,
  _height: 107,
}

export function Jl366a6pQsfp28Adv(props: NodeProps) {
  return (
    <Shape
      {...JL366A_6P_QSFP28_ADV}
      {...props}
      _style={extendStyle(JL366A_6P_QSFP28_ADV, props)}
    />
  )
}
