import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PC = {
  _style:
    'shape=mxgraph.cisco.computers_and_peripherals.pc;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 70,
}

export function Pc(props: DiagramNodeProps) {
  return <Shape {...PC} {...props} />
}
