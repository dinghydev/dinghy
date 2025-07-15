import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JK_FLIP_FLOP_WITH_SR = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.jk_flip-flop_with_sr;',
  _width: 100,
  _height: 100,
}

export function JkFlipFlopWithSr(props: DiagramNodeProps) {
  return <Shape {...JK_FLIP_FLOP_WITH_SR} {...props} />
}
