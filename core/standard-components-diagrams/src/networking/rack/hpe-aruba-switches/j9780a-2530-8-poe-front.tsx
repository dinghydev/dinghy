import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const J9780A_2530_8_POE_FRONT = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9780a_2530_8_poeplus_front;',
  _width: 142,
  _height: 15,
}

export function J9780a25308PoeFront(props: DiagramNodeProps) {
  return <Shape {...J9780A_2530_8_POE_FRONT} {...props} />
}
