import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POINT_TO_POINT_CHANNEL = {
  _style:
    'edgeStyle=none;html=1;strokeColor=#808080;endArrow=block;endSize=10;dashed=0;verticalAlign=bottom;strokeWidth=2;',
  _width: 160,
  _height: 0,
}

export function PointToPointChannel(props: DiagramNodeProps) {
  return <Dependency {...POINT_TO_POINT_CHANNEL} {...props} />
}
