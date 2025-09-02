import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL579A_ARUBA_8320_32P_40G_QSFP_5_FANS_2_PS_SWITCH_BUNDLE_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl579a_aruba_8320_32p_40g_qsfpplus_5_fans_2_ps_switch_bundle_rear;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function Jl579aAruba832032p40gQsfp5Fans2PsSwitchBundleRear(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...JL579A_ARUBA_8320_32P_40G_QSFP_5_FANS_2_PS_SWITCH_BUNDLE_REAR}
      {...props}
      _style={extendStyle(
        JL579A_ARUBA_8320_32P_40G_QSFP_5_FANS_2_PS_SWITCH_BUNDLE_REAR,
        props,
      )}
    />
  )
}
