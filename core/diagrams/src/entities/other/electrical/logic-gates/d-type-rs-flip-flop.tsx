import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const D_TYPE_RS_FLIP_FLOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.d_type_rs_flip-flop;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function DTypeRsFlipFlop(props: NodeProps) {
  return (
    <Shape
      {...D_TYPE_RS_FLIP_FLOP}
      {...props}
      _style={extendStyle(D_TYPE_RS_FLIP_FLOP, props)}
    />
  )
}
