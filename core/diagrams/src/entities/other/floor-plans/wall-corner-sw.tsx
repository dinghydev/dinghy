import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WALL_CORNER_SW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=north',
  },
  _original_width: 100,
  _original_height: 100,
}

export function WallCornerSw(props: NodeProps) {
  return (
    <Shape
      {...WALL_CORNER_SW}
      {...props}
      _style={extendStyle(WALL_CORNER_SW, props)}
    />
  )
}
