import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const D_TYPE_RS_FLIP_FLOP = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.d_type_rs_flip-flop;',
  _width: 60,
  _height: 60,
}

export function DTypeRsFlipFlop(props: DiagramNodeProps) {
  return (
    <Shape
      {...D_TYPE_RS_FLIP_FLOP}
      {...props}
      _style={extendStyle(D_TYPE_RS_FLIP_FLOP, props)}
    />
  )
}
