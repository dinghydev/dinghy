import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9991A_20_PORT_10_100_1000BASE_T_POE_AND_4_PORT_1_2_5_5_10GBASE_T_POE_WITH_MACSEC_V3_ZL2_MODULE =
  {
    _style: {
      entity:
        'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9991a_20_port_10_100_1000base_t_poeplus_and_4_port_1_2.5_5_10gbase_t_poeplus_with_macsec_v3_zl2_module;',
    },
    _width: 75,
    _height: 15,
  }

export function J9991a20Port101001000baseTPoeAnd4Port125510gbaseTPoeWithMacsecV3Zl2Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...J9991A_20_PORT_10_100_1000BASE_T_POE_AND_4_PORT_1_2_5_5_10GBASE_T_POE_WITH_MACSEC_V3_ZL2_MODULE}
      {...props}
      _style={extendStyle(
        J9991A_20_PORT_10_100_1000BASE_T_POE_AND_4_PORT_1_2_5_5_10GBASE_T_POE_WITH_MACSEC_V3_ZL2_MODULE,
        props,
      )}
    />
  )
}
