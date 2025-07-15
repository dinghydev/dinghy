import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WALL_CORNER_SW = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=north',
  _width: 100,
  _height: 100,
}

export function WallCornerSw(props: DiagramNodeProps) {
  return <Shape {...WALL_CORNER_SW} {...props} />
}
