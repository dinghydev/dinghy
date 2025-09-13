import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9774A_2530_8G_POE_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9774a_2530_8g_poeplus_front;',
  },
  _width: 87,
  _height: 15,
}

export function J9774a25308gPoeFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9774A_2530_8G_POE_FRONT}
      {...props}
      _style={extendStyle(J9774A_2530_8G_POE_FRONT, props)}
    />
  )
}
