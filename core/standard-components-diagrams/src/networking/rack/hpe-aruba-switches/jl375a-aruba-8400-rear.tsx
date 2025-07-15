import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JL375A_ARUBA_8400_REAR = {
  _style:
    'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl375a_aruba_8400_rear;',
  _width: 142,
  _height: 112,
}

export function Jl375aAruba8400Rear(props: DiagramNodeProps) {
  return <Shape {...JL375A_ARUBA_8400_REAR} {...props} />
}
