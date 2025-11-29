import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9777A_2530_8G_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9777a_2530_8g_front;',
  },
  _width: 87,
  _height: 15,
}

export function J9777a25308gFront(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, J9777A_2530_8G_FRONT)} />
}
