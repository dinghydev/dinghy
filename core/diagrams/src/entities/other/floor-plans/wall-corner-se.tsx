import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WALL_CORNER_SE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=west',
  },
  _original_width: 100,
  _original_height: 100,
}

export function WallCornerSe(props: NodeProps) {
  return (
    <Shape
      {...WALL_CORNER_SE}
      {...props}
      _style={extendStyle(WALL_CORNER_SE, props)}
    />
  )
}
