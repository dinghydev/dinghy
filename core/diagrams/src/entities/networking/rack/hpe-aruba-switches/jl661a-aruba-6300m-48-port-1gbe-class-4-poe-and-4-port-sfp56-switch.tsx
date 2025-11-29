import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL661A_ARUBA_6300M_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP56_SWITCH =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl661a_aruba_6300m_48_port_1gbe_class_4_poe_and_4_port_sfp56_switch;',
    },
    _width: 142,
    _height: 15,
  }

export function Jl661aAruba6300m48Port1gbeClass4PoeAnd4PortSfp56Switch(
  props: NodeProps,
) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        JL661A_ARUBA_6300M_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP56_SWITCH,
      )}
    />
  )
}
