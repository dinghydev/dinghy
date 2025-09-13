import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL665A_ARUBA_6300F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP56_SWITCH =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl665a_aruba_6300f_48_port_1gbe_class_4_poe_and_4_port_sfp56_switch;',
    },
    _width: 142,
    _height: 15,
  }

export function Jl665aAruba6300f48Port1gbeClass4PoeAnd4PortSfp56Switch(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL665A_ARUBA_6300F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP56_SWITCH}
      {...props}
      _style={extendStyle(
        JL665A_ARUBA_6300F_48_PORT_1GBE_CLASS_4_POE_AND_4_PORT_SFP56_SWITCH,
        props,
      )}
    />
  )
}
