import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL668A_ARUBA_6300F_24_PORT_1GBE_AND_4_PORT_SFP56_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl668a_aruba_6300f_24_port_1gbe_and_4_port_sfp56_switch;',
  },
  _width: 142,
  _height: 15,
}

export function Jl668aAruba6300f24Port1gbeAnd4PortSfp56Switch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL668A_ARUBA_6300F_24_PORT_1GBE_AND_4_PORT_SFP56_SWITCH}
      {...props}
      _style={extendStyle(
        JL668A_ARUBA_6300F_24_PORT_1GBE_AND_4_PORT_SFP56_SWITCH,
        props,
      )}
    />
  )
}
