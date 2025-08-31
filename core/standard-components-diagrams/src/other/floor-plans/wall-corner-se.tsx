import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_CORNER_SE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=west',
  _width: 60,
  _height: 60,
}

export function WallCornerSe(props: DiagramNodeProps) {
  return (
    <Shape
      {...WALL_CORNER_SE}
      {...props}
      _style={extendStyle(WALL_CORNER_SE, props)}
    />
  )
}
