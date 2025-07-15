import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_6_POINT_STAR = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.6_point_star',
  _width: 100,
  _height: 90,
}

export function Component6PointStar(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_6_POINT_STAR} {...props} />
}
