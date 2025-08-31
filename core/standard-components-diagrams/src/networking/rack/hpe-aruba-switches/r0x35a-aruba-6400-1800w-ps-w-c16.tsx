import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const R0X35A_ARUBA_6400_1800W_PS_W_C16 = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.r0x35a_aruba_6400_1800w_ps_w_c16;',
  },
  _width: 41,
  _height: 20,
}

export function R0x35aAruba64001800wPsWC16(props: DiagramNodeProps) {
  return (
    <Shape
      {...R0X35A_ARUBA_6400_1800W_PS_W_C16}
      {...props}
      _style={extendStyle(R0X35A_ARUBA_6400_1800W_PS_W_C16, props)}
    />
  )
}
