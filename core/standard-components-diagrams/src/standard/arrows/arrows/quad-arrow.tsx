import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUAD_ARROW = {
  _style:
    'shape=mxgraph.arrows.quad_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 60,
  _height: 60,
}

export function QuadArrow(props: DiagramNodeProps) {
  return (
    <Shape {...QUAD_ARROW} {...props} _style={extendStyle(QUAD_ARROW, props)} />
  )
}
