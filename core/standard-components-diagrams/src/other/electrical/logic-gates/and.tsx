import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AND = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=and;',
  _width: 100,
  _height: 60,
}

export function And(props: DiagramNodeProps) {
  return <Shape {...AND} {...props} />
}
