import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SLENDER_TWO_WAY_ARROW = {
  _style:
    'shape=mxgraph.arrows.slender_two_way_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 60,
}

export function SlenderTwoWayArrow(props: DiagramNodeProps) {
  return <Shape {...SLENDER_TWO_WAY_ARROW} {...props} />
}
