import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL663A_ARUBA_6300M_48_PORT_1GBE_AND_4_PORT_SFP56_SWITCH_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl663a_aruba_6300m_48_port_1gbe_and_4_port_sfp56_switch_rear;',
  },
  _width: 142,
  _height: 15,
}

export function Jl663aAruba6300m48Port1gbeAnd4PortSfp56SwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL663A_ARUBA_6300M_48_PORT_1GBE_AND_4_PORT_SFP56_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL663A_ARUBA_6300M_48_PORT_1GBE_AND_4_PORT_SFP56_SWITCH_REAR,
        props,
      )}
    />
  )
}
