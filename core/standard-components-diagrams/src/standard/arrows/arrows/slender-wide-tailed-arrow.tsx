import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SLENDER_WIDE_TAILED_ARROW = {
  _style:
    'shape=mxgraph.arrows.slender_wide_tailed_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 96,
  _height: 60,
}

export function SlenderWideTailedArrow(props: DiagramNodeProps) {
  return <Shape {...SLENDER_WIDE_TAILED_ARROW} {...props} />
}
