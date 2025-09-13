import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J993A_8_PORT_1G_10GBE_SFP_WITH_MACSEC_V3_ZL2_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j993a_8_port_1g_10gbe_sfpplus_with_macsec_v3_zl2_module;',
  },
  _width: 75,
  _height: 15,
}

export function J993a8Port1g10gbeSfpWithMacsecV3Zl2Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...J993A_8_PORT_1G_10GBE_SFP_WITH_MACSEC_V3_ZL2_MODULE}
      {...props}
      _style={extendStyle(
        J993A_8_PORT_1G_10GBE_SFP_WITH_MACSEC_V3_ZL2_MODULE,
        props,
      )}
    />
  )
}
