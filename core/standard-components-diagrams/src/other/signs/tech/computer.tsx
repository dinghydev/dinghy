import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPUTER = {
  _style:
    'shape=mxgraph.signs.tech.computer;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function Computer(props: DiagramNodeProps) {
  return <Shape {...COMPUTER} {...props} />
}
