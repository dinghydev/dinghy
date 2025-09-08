import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL365A_8P_QSFP_ADV = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl365a_8p_qsfpplus_adv;',
  },
  _original_width: 14,
  _original_height: 107,
}

export function Jl365a8pQsfpAdv(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL365A_8P_QSFP_ADV}
      {...props}
      _style={extendStyle(JL365A_8P_QSFP_ADV, props)}
    />
  )
}
