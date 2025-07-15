import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_4_POINT_STAR = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.4_point_star_2;dx=0.8;',
  _width: 100,
  _height: 100,
}

export function Component4PointStar(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_4_POINT_STAR} {...props} />
}
