import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL083A_3810M_2930M_4_PORT_10GBE_SFP_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl083a_3810m_2930m_4_port_10gbe_sfpplus_module;',
  },
  _width: 41,
  _height: 15,
}

export function Jl083a3810m2930m4Port10gbeSfpModule(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, JL083A_3810M_2930M_4_PORT_10GBE_SFP_MODULE)}
    />
  )
}
