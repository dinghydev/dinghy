import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9989A_12_PORT_10_100_1000BASE_T_POE_AND_12_PORT_1GBE_SFP_WITH_MACSEC_V3_ZL2_MODULE =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9989a_12_port_10_100_1000base_t_poeplus_and_12_port_1gbe_sfp_with_macsec_v3_zl2_module;',
    },
    _original_width: 75,
    _original_height: 15,
  }

export function J9989a12Port101001000baseTPoeAnd12Port1gbeSfpWithMacsecV3Zl2Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...J9989A_12_PORT_10_100_1000BASE_T_POE_AND_12_PORT_1GBE_SFP_WITH_MACSEC_V3_ZL2_MODULE}
      {...props}
      _style={extendStyle(
        J9989A_12_PORT_10_100_1000BASE_T_POE_AND_12_PORT_1GBE_SFP_WITH_MACSEC_V3_ZL2_MODULE,
        props,
      )}
    />
  )
}
