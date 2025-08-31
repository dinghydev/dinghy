import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_CORNER_SW = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=north',
  _width: 60,
  _height: 60,
}

export function WallCornerSw(props: DiagramNodeProps) {
  return (
    <Shape
      {...WALL_CORNER_SW}
      {...props}
      _style={extendStyle(WALL_CORNER_SW, props)}
    />
  )
}
