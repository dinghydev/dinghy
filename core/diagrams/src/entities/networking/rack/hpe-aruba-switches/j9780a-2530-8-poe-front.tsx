import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const J9780A_2530_8_POE_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9780a_2530_8_poeplus_front;',
  },
  _width: 142,
  _height: 15,
}

export function J9780a25308PoeFront(props: NodeProps) {
  return (
    <Shape
      {...J9780A_2530_8_POE_FRONT}
      {...props}
      _style={extendStyle(J9780A_2530_8_POE_FRONT, props)}
    />
  )
}
