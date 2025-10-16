import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL375A_ARUBA_8400_REAR_EMPTY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl375a_aruba_8400_rear_empty;',
  },
  _width: 142,
  _height: 112,
}

export function Jl375aAruba8400RearEmpty(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL375A_ARUBA_8400_REAR_EMPTY}
      {...props}
      _style={extendStyle(JL375A_ARUBA_8400_REAR_EMPTY, props)}
    />
  )
}
