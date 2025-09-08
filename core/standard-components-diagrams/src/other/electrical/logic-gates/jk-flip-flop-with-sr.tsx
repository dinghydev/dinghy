import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const JK_FLIP_FLOP_WITH_SR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.jk_flip-flop_with_sr;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function JkFlipFlopWithSr(props: DiagramNodeProps) {
  return (
    <Shape
      {...JK_FLIP_FLOP_WITH_SR}
      {...props}
      _style={extendStyle(JK_FLIP_FLOP_WITH_SR, props)}
    />
  )
}
