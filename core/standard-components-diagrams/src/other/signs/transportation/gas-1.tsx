import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAS_1 = {
  _style:
    'shape=mxgraph.signs.transportation.gas_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 63,
  _height: 98,
}

export function Gas1(props: DiagramNodeProps) {
  return <Shape {...GAS_1} {...props} />
}
