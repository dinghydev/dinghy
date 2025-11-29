import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9822A_5412R_ZL2_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9822a_5412r_zl2_switch;',
  },
  _width: 142,
  _height: 98,
}

export function J9822a5412rZl2Switch(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, J9822A_5412R_ZL2_SWITCH)} />
  )
}
