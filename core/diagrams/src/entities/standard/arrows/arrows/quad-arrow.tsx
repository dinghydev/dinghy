import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUAD_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.quad_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 97,
}

export function QuadArrow(props: NodeProps) {
  return (
    <Shape {...QUAD_ARROW} {...props} _style={extendStyle(QUAD_ARROW, props)} />
  )
}
