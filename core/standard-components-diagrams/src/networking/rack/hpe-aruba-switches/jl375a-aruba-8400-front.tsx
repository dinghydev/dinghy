import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JL375A_ARUBA_8400_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl375a_aruba_8400_front;',
  },
  _width: 142,
  _height: 112,
}

export function Jl375aAruba8400Front(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL375A_ARUBA_8400_FRONT}
      {...props}
      _style={extendStyle(JL375A_ARUBA_8400_FRONT, props)}
    />
  )
}
