import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARROW_EAST = {
  _style:
    'shape=mxgraph.signs.travel.arrow_east;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 83,
}

export function ArrowEast(props: DiagramNodeProps) {
  return <Shape {...ARROW_EAST} {...props} />
}
