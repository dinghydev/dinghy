import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_6_POINT_STAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.6_point_star',
  },
  _original_width: 100,
  _original_height: 90,
}

export function Component6PointStar(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_6_POINT_STAR}
      {...props}
      _style={extendStyle(COMPONENT_6_POINT_STAR, props)}
    />
  )
}
