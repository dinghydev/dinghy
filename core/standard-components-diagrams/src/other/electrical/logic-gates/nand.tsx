import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAND = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.logic_gate;operation=and;negating=1;negSize=0.15;',
  _width: 100,
  _height: 60,
}

export function Nand(props: DiagramNodeProps) {
  return <Shape {...NAND} {...props} />
}
