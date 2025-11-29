import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JL375A_ARUBA_8400_FRONT = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl375a_aruba_8400_front;',
  },
  _width: 142,
  _height: 112,
}

export function Jl375aAruba8400Front(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, JL375A_ARUBA_8400_FRONT)} />
  )
}
