import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9992A_20_PORT_10_100_1000BASE_T_POE_AND_1_PORT_40GBE_QSFP_WITH_MACSEC_V3_ZL2_MODULE =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9992a_20_port_10_100_1000base_t_poeplus_and_1_port_40gbe_qsfpplus_withmacsec_v3_zl2_module;',
    },
    _original_width: 75,
    _original_height: 15,
  }

export function J9992a20Port101001000baseTPoeAnd1Port40gbeQsfpWithMacsecV3Zl2Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...J9992A_20_PORT_10_100_1000BASE_T_POE_AND_1_PORT_40GBE_QSFP_WITH_MACSEC_V3_ZL2_MODULE}
      {...props}
      _style={extendStyle(
        J9992A_20_PORT_10_100_1000BASE_T_POE_AND_1_PORT_40GBE_QSFP_WITH_MACSEC_V3_ZL2_MODULE,
        props,
      )}
    />
  )
}
