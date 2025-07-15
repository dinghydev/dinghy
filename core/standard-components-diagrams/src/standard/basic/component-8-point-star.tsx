import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_8_POINT_STAR = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.8_point_star',
  _width: 100,
  _height: 100,
}

export function Component8PointStar(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_8_POINT_STAR} {...props} />
}
