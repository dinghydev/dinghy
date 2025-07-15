import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POUND = {
  _style:
    'shape=mxgraph.signs.travel.pound;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 68,
  _height: 98,
}

export function Pound(props: DiagramNodeProps) {
  return <Shape {...POUND} {...props} />
}
