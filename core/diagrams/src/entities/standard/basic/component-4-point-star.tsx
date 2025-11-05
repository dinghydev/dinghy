import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_4_POINT_STAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.4_point_star_2;dx=0.8;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Component4PointStar(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_4_POINT_STAR}
      {...props}
      _style={extendStyle(COMPONENT_4_POINT_STAR, props)}
    />
  )
}
