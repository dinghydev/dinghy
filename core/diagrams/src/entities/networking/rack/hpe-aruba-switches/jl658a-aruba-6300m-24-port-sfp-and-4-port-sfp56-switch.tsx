import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL658A_ARUBA_6300M_24_PORT_SFP_AND_4_PORT_SFP56_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl658a_aruba_6300m_24_port_sfpplus_and_4_port_sfp56_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl658aAruba6300m24PortSfpAnd4PortSfp56Switch(props: NodeProps) {
  return (
    <Shape
      {...JL658A_ARUBA_6300M_24_PORT_SFP_AND_4_PORT_SFP56_SWITCH}
      {...props}
      _style={extendStyle(
        JL658A_ARUBA_6300M_24_PORT_SFP_AND_4_PORT_SFP56_SWITCH,
        props,
      )}
    />
  )
}
