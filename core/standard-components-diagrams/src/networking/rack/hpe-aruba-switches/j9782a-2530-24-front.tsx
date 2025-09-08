import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const J9782A_2530_24_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.j9782a_2530_24_front;',
  },
  _original_width: 142,
  _original_height: 15,
}

export function J9782a253024Front(props: DiagramNodeProps) {
  return (
    <Shape
      {...J9782A_2530_24_FRONT}
      {...props}
      _style={extendStyle(J9782A_2530_24_FRONT, props)}
    />
  )
}
