import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9830B_5400R_2750W_POE_ZL2_POWER_SUPPLY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9830b_5400r_2750w_poeplus_zl2_power_supply;',
  },
  _width: 63,
  _height: 43,
}

export function J9830b5400r2750wPoeZl2PowerSupply(props: NodeProps) {
  return (
    <Shape
      {...J9830B_5400R_2750W_POE_ZL2_POWER_SUPPLY}
      {...props}
      _style={extendStyle(J9830B_5400R_2750W_POE_ZL2_POWER_SUPPLY, props)}
    />
  )
}
