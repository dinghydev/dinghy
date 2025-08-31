import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_8_POINT_STAR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.8_point_star',
  },
  _width: 60,
  _height: 60,
}

export function Component8PointStar(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_8_POINT_STAR}
      {...props}
      _style={extendStyle(COMPONENT_8_POINT_STAR, props)}
    />
  )
}
