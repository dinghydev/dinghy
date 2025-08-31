import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9774A_2530_8G_POEPLUS_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9774a_2530_8g_poeplus_rear;',
  _width: 87,
  _height: 15,
}

export function J9774a25308gPoeplusRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9774A_2530_8G_POEPLUS_REAR}
      {...props}
      _style={extendStyle(J9774A_2530_8G_POEPLUS_REAR, props)}
    />
  )
}
