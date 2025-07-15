import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const D_TYPE_FLIP_FLOP = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.d_type_flip-flop;',
  _width: 100,
  _height: 80,
}

export function DTypeFlipFlop(props: DiagramNodeProps) {
  return <Shape {...D_TYPE_FLIP_FLOP} {...props} />
}
