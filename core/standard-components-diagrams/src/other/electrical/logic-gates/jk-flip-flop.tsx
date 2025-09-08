import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JK_FLIP_FLOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.jk_flip-flop;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function JkFlipFlop(props: DiagramNodeProps) {
  return (
    <Shape
      {...JK_FLIP_FLOP}
      {...props}
      _style={extendStyle(JK_FLIP_FLOP, props)}
    />
  )
}
