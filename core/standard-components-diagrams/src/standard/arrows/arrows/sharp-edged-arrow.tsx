import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARP_EDGED_ARROW = {
  _style:
    'shape=mxgraph.arrows.sharp_edged_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 60,
}

export function SharpEdgedArrow(props: DiagramNodeProps) {
  return <Shape {...SHARP_EDGED_ARROW} {...props} />
}
