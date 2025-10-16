import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const R0X36A_ARUBA_6400_3000W_PS_W_C20 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x36a_aruba_6400_3000w_ps_w_c20;',
  },
  _width: 41,
  _height: 20,
}

export function R0x36aAruba64003000wPsWC20(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X36A_ARUBA_6400_3000W_PS_W_C20}
      {...props}
      _style={extendStyle(R0X36A_ARUBA_6400_3000W_PS_W_C20, props)}
    />
  )
}
