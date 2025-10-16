import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL087A_3810M_2930M_1_PORT_40GBE_QSFP_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl087a_3810m_2930m_1_port_40gbe_qsfpplus_module;',
  },
  _width: 41,
  _height: 15,
}

export function Jl087a3810m2930m1Port40gbeQsfpModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL087A_3810M_2930M_1_PORT_40GBE_QSFP_MODULE}
      {...props}
      _style={extendStyle(JL087A_3810M_2930M_1_PORT_40GBE_QSFP_MODULE, props)}
    />
  )
}
