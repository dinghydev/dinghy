import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9828A_5400R_700W_POE_ZL2_POWER_SUPPLY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9828a_5400r_700w_poeplus_zl2_power_supply;',
  },
  _width: 63,
  _height: 43,
}

export function J9828a5400r700wPoeZl2PowerSupply(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9828A_5400R_700W_POE_ZL2_POWER_SUPPLY}
      {...props}
      _style={extendStyle(J9828A_5400R_700W_POE_ZL2_POWER_SUPPLY, props)}
    />
  )
}
