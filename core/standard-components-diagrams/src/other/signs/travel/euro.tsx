import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EURO = {
  _style:
    'shape=mxgraph.signs.travel.euro;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 86,
  _height: 98,
}

export function Euro(props: DiagramNodeProps) {
  return <Shape {...EURO} {...props} />
}
