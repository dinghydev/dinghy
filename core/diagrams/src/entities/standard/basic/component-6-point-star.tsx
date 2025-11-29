import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_6_POINT_STAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.6_point_star',
  },
  _original_width: 100,
  _original_height: 90,
}

export function Component6PointStar(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, COMPONENT_6_POINT_STAR)} />
  )
}
