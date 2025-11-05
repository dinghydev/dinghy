import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9850A_540R_ZL2_SWITCH = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9850a_540r_zl2_switch;',
  },
  _width: 142,
  _height: 55,
}

export function J9850a540rZl2Switch(props: NodeProps) {
  return (
    <Shape
      {...J9850A_540R_ZL2_SWITCH}
      {...props}
      _style={extendStyle(J9850A_540R_ZL2_SWITCH, props)}
    />
  )
}
