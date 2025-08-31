import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const J9778A_2530_48_POE_FRONT = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9778a_2530_48_poeplus_front;',
  _width: 142,
  _height: 15,
}

export function J9778a253048PoeFront(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9778A_2530_48_POE_FRONT}
      {...props}
      _style={extendStyle(J9778A_2530_48_POE_FRONT, props)}
    />
  )
}
