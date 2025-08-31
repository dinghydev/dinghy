import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9777A_2530_8G_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9777a_2530_8g_rear;',
  _width: 87,
  _height: 15,
}

export function J9777a25308gRear(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9777A_2530_8G_REAR}
      {...props}
      _style={extendStyle(J9777A_2530_8G_REAR, props)}
    />
  )
}
