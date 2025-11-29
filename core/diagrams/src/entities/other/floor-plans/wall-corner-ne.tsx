import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WALL_CORNER_NE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallCorner;fillColor=strokeColor;direction=south;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function WallCornerNe(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WALL_CORNER_NE)} />
}
