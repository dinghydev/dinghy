import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALLOUT_QUAD_ARROW = {
  _style: {
    entity:
      'shape=mxgraph.arrows.callout_quad_arrow;html=1;verticalLabelPosition=bottom;verticalAlign=top;strokeWidth=2;strokeColor=#000000;',
  },
  _original_width: 97,
  _original_height: 97,
}

export function CalloutQuadArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALLOUT_QUAD_ARROW)} />
}
