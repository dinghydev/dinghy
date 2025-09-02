import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const D_TYPE_FLIP_FLOP_WITH_CLEAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.d_type_flip-flop_with_clear_2;',
  },
  _original_width: 100,
  _original_height: 90,
}

export function DTypeFlipFlopWithClear(props: DiagramNodeProps) {
  return (
    <Shape
      {...D_TYPE_FLIP_FLOP_WITH_CLEAR}
      {...props}
      _style={extendStyle(D_TYPE_FLIP_FLOP_WITH_CLEAR, props)}
    />
  )
}
