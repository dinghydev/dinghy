import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JL376A_ARUBA_8400_REAR_EMPTY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;shadow=0;dashed=0;shape=mxgraph.rack.hpe_aruba.switches.jl376a_aruba_8400_rear_empty;',
  },
  _original_width: 142,
  _original_height: 112,
}

export function Jl376aAruba8400RearEmpty(props: DiagramNodeProps) {
  return (
    <Shape
      {...JL376A_ARUBA_8400_REAR_EMPTY}
      {...props}
      _style={extendStyle(JL376A_ARUBA_8400_REAR_EMPTY, props)}
    />
  )
}
