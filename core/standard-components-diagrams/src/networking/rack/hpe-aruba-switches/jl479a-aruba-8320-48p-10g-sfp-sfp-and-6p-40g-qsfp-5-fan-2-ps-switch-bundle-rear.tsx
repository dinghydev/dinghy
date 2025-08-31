import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL479A_ARUBA_8320_48P_10G_SFP_SFP_AND_6P_40G_QSFP_5_FAN_2_PS_SWITCH_BUNDLE_REAR =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl479a_aruba_8320_48p_10g_sfp_sfpplus_and_6p_40g_qsfpplus_5_fan_2_ps_switch_bundle_rear;',
    },
    _width: 142,
    _height: 15,
  }

export function Jl479aAruba832048p10gSfpSfpAnd6p40gQsfp5Fan2PsSwitchBundleRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL479A_ARUBA_8320_48P_10G_SFP_SFP_AND_6P_40G_QSFP_5_FAN_2_PS_SWITCH_BUNDLE_REAR}
      {...props}
      _style={extendStyle(
        JL479A_ARUBA_8320_48P_10G_SFP_SFP_AND_6P_40G_QSFP_5_FAN_2_PS_SWITCH_BUNDLE_REAR,
        props,
      )}
    />
  )
}
