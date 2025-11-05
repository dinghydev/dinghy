import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL363A_32P_SFP_ADV = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl363a_32p_sfpplus_adv;',
  },
  _width: 14,
  _height: 107,
}

export function Jl363a32pSfpAdv(props: NodeProps) {
  return (
    <Shape
      {...JL363A_32P_SFP_ADV}
      {...props}
      _style={extendStyle(JL363A_32P_SFP_ADV, props)}
    />
  )
}
