import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const D_TYPE_FLIP_FLOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.d_type_flip-flop;',
  },
  _width: 100,
  _height: 80,
}

export function DTypeFlipFlop(props: NodeProps) {
  return (
    <Shape
      {...D_TYPE_FLIP_FLOP}
      {...props}
      _style={extendStyle(D_TYPE_FLIP_FLOP, props)}
    />
  )
}
