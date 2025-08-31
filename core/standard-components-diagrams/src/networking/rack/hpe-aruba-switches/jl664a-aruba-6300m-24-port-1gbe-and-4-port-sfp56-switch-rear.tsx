import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL664A_ARUBA_6300M_24_PORT_1GBE_AND_4_PORT_SFP56_SWITCH_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl664a_aruba_6300m_24_port_1gbe_and_4_port_sfp56_switch_rear;',
  _width: 142,
  _height: 15,
}

export function Jl664aAruba6300m24Port1gbeAnd4PortSfp56SwitchRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL664A_ARUBA_6300M_24_PORT_1GBE_AND_4_PORT_SFP56_SWITCH_REAR}
      {...props}
      _style={extendStyle(
        JL664A_ARUBA_6300M_24_PORT_1GBE_AND_4_PORT_SFP56_SWITCH_REAR,
        props,
      )}
    />
  )
}
