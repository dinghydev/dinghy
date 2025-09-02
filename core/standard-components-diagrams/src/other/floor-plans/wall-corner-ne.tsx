import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_CORNER_NE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=south;',
  },
  _original_width: 100,
  _original_height: 100,
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
