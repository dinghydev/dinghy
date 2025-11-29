import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const T_TYPE_FLIP_FLOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.t_type_flip-flop;',
  },
  _width: 100,
  _height: 80,
}

export function TTypeFlipFlop(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, T_TYPE_FLIP_FLOP)} />
}
