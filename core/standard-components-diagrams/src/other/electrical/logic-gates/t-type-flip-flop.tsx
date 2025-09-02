import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const T_TYPE_FLIP_FLOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.t_type_flip-flop;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function TTypeFlipFlop(props: DiagramNodeProps) {
  return (
    <Shape
      {...T_TYPE_FLIP_FLOP}
      {...props}
      _style={extendStyle(T_TYPE_FLIP_FLOP, props)}
    />
  )
}
