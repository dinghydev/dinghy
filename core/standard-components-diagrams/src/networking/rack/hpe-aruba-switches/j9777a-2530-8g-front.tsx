import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9777A_2530_8G_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9777a_2530_8g_front;',
  },
  _original_width: 87,
  _original_height: 15,
}

export function J9777a25308gFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9777A_2530_8G_FRONT}
      {...props}
      _style={extendStyle(J9777A_2530_8G_FRONT, props)}
    />
  )
}
