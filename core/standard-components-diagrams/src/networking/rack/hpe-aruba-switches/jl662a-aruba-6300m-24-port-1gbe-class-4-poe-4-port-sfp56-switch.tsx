import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL662A_ARUBA_6300M_24_PORT_1GBE_CLASS_4_POE_4_PORT_SFP56_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl662a_aruba_6300m_24_port_1gbe_class_4_poe_4_port_sfp56_switch;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl662aAruba6300m24Port1gbeClass4Poe4PortSfp56Switch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL662A_ARUBA_6300M_24_PORT_1GBE_CLASS_4_POE_4_PORT_SFP56_SWITCH}
      {...props}
      _style={extendStyle(
        JL662A_ARUBA_6300M_24_PORT_1GBE_CLASS_4_POE_4_PORT_SFP56_SWITCH,
        props,
      )}
    />
  )
}
