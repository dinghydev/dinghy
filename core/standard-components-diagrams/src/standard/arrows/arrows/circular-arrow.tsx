import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CIRCULAR_ARROW = {
  _style:
    'shape=mxgraph.arrows.circular_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 69,
}

export function CircularArrow(props: DiagramNodeProps) {
  return <Shape {...CIRCULAR_ARROW} {...props} />
}
