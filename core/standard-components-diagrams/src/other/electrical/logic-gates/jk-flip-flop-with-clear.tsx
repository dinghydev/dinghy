import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JK_FLIP_FLOP_WITH_CLEAR = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.jk_flip-flop_with_clear_2;',
  _width: 100,
  _height: 90,
}

export function JkFlipFlopWithClear(props: DiagramNodeProps) {
  return <Shape {...JK_FLIP_FLOP_WITH_CLEAR} {...props} />
}
