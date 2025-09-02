import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL258A_ARUBA_2930F_8G_POE_2SFP_REAR = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl258a_aruba_2930f_8g_poeplus_2sfpplus_rear;',
  },
  _original_width: 82,
  _original_height: 15,
}

export function Jl258aAruba2930f8gPoe2sfpRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL258A_ARUBA_2930F_8G_POE_2SFP_REAR}
      {...props}
      _style={extendStyle(JL258A_ARUBA_2930F_8G_POE_2SFP_REAR, props)}
    />
  )
}
