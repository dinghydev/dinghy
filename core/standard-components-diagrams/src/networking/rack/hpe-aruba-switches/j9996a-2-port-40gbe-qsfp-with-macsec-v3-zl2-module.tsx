import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9996A_2_PORT_40GBE_QSFP_WITH_MACSEC_V3_ZL2_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9996a_2_port_40gbe_qsfpplus_with_macsec_v3_zl2_module;',
  },
  _width: 75,
  _height: 15,
}

export function J9996a2Port40gbeQsfpWithMacsecV3Zl2Module(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...J9996A_2_PORT_40GBE_QSFP_WITH_MACSEC_V3_ZL2_MODULE}
      {...props}
      _style={extendStyle(
        J9996A_2_PORT_40GBE_QSFP_WITH_MACSEC_V3_ZL2_MODULE,
        props,
      )}
    />
  )
}
