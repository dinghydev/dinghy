import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const R0X45A_ARUBA_6400_12P_40G_100G_QSFP28_MODULE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x45a_aruba_6400_12p_40g_100g_qsfp28_module;',
  },
  _width: 142,
  _height: 15,
}

export function R0x45aAruba640012p40g100gQsfp28Module(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X45A_ARUBA_6400_12P_40G_100G_QSFP28_MODULE}
      {...props}
      _style={extendStyle(R0X45A_ARUBA_6400_12P_40G_100G_QSFP28_MODULE, props)}
    />
  )
}
