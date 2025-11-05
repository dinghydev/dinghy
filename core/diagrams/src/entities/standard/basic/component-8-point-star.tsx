import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_8_POINT_STAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.8_point_star',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Component8PointStar(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_8_POINT_STAR}
      {...props}
      _style={extendStyle(COMPONENT_8_POINT_STAR, props)}
    />
  )
}
