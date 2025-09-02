import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9987A_24_PORT_10_100_1000BASE_T_WITH_MACSEC_V3_ZL2_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9987a_24_port_10_100_1000base_t_with_macsec_v3_zl2_module;',
  },
  _original_width: 75,
  _original_height: 15,
}

export function J9987a24Port101001000baseTWithMacsecV3Zl2Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...J9987A_24_PORT_10_100_1000BASE_T_WITH_MACSEC_V3_ZL2_MODULE}
      {...props}
      _style={extendStyle(
        J9987A_24_PORT_10_100_1000BASE_T_WITH_MACSEC_V3_ZL2_MODULE,
        props,
      )}
    />
  )
}
