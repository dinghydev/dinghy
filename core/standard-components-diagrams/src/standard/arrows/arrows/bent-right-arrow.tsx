import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BENT_RIGHT_ARROW = {
  _style:
    'shape=mxgraph.arrows.bent_right_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 97,
}

export function BentRightArrow(props: DiagramNodeProps) {
  return <Shape {...BENT_RIGHT_ARROW} {...props} />
}
