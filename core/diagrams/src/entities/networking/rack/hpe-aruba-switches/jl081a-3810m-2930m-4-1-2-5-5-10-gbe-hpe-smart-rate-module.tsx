import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL081A_3810M_2930M_4_1_2_5_5_10_GBE_HPE_SMART_RATE_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl081a_3810m_2930m_4_1_2_5_5_10_gbe_hpe_smart_rate_module;',
  },
  _width: 41,
  _height: 15,
}

export function Jl081a3810m2930m4125510GbeHpeSmartRateModule(props: NodeProps) {
  return (
    <Shape
      {...JL081A_3810M_2930M_4_1_2_5_5_10_GBE_HPE_SMART_RATE_MODULE}
      {...props}
      _style={extendStyle(
        JL081A_3810M_2930M_4_1_2_5_5_10_GBE_HPE_SMART_RATE_MODULE,
        props,
      )}
    />
  )
}
