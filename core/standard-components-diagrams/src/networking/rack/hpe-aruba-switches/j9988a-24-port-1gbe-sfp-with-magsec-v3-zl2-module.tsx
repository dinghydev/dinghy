import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9988A_24_PORT_1GBE_SFP_WITH_MAGSEC_V3_ZL2_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9988a_24_port_1gbe_sfp_with_magsec_v3_zl2_module;',
  },
  _width: 75,
  _height: 15,
}

export function J9988a24Port1gbeSfpWithMagsecV3Zl2Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...J9988A_24_PORT_1GBE_SFP_WITH_MAGSEC_V3_ZL2_MODULE}
      {...props}
      _style={extendStyle(
        J9988A_24_PORT_1GBE_SFP_WITH_MAGSEC_V3_ZL2_MODULE,
        props,
      )}
    />
  )
}
