import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WALL_CORNER_SE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=west',
  _width: 100,
  _height: 100,
}

export function WallCornerSe(props: DiagramNodeProps) {
  return <Shape {...WALL_CORNER_SE} {...props} />
}
