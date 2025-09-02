import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_CORNER_NW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function WallCornerNw(props: DiagramNodeProps) {
  return (
    <Shape
      {...WALL_CORNER_NW}
      {...props}
      _style={extendStyle(WALL_CORNER_NW, props)}
    />
  )
}
