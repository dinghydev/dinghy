import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_CORNER_NE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=south;',
  _width: 60,
  _height: 60,
}

export function WallCornerNe(props: DiagramNodeProps) {
  return (
    <Shape
      {...WALL_CORNER_NE}
      {...props}
      _style={extendStyle(WALL_CORNER_NE, props)}
    />
  )
}
