import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL079A3810M_2930M_2_PORT_40GBE_QSFP_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl079a3810m_2930m_2_port_40gbe_qsfpplus_module;',
  },
  _original_width: 41,
  _original_height: 15,
}

export function Jl079a3810m2930m2Port40gbeQsfpModule(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL079A3810M_2930M_2_PORT_40GBE_QSFP_MODULE}
      {...props}
      _style={extendStyle(JL079A3810M_2930M_2_PORT_40GBE_QSFP_MODULE, props)}
    />
  )
}
