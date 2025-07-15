import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALLOUT_QUAD_ARROW = {
  _style:
    'shape=mxgraph.arrows.callout_quad_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  _width: 97,
  _height: 97,
}

export function CalloutQuadArrow(props: DiagramNodeProps) {
  return <Shape {...CALLOUT_QUAD_ARROW} {...props} />
}
