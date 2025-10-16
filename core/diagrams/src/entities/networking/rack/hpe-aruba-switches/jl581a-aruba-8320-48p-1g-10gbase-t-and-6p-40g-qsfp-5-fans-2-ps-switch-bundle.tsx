import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL581A_ARUBA_8320_48P_1G_10GBASE_T_AND_6P_40G_QSFP_5_FANS_2_PS_SWITCH_BUNDLE =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl581a_aruba_8320_48p_1g_10gbase_t_and_6p_40g_qsfpplus_5_fans_2_ps_switch_bundle;',
    },
    _width: 142,
    _height: 15,
  }

export function Jl581aAruba832048p1g10gbaseTAnd6p40gQsfp5Fans2PsSwitchBundle(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL581A_ARUBA_8320_48P_1G_10GBASE_T_AND_6P_40G_QSFP_5_FANS_2_PS_SWITCH_BUNDLE}
      {...props}
      _style={extendStyle(
        JL581A_ARUBA_8320_48P_1G_10GBASE_T_AND_6P_40G_QSFP_5_FANS_2_PS_SWITCH_BUNDLE,
        props,
      )}
    />
  )
}
