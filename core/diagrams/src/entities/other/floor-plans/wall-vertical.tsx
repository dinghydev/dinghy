import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WALL_VERTICAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wall;fillColor=strokeColor;direction=south;',
  },
  _width: 10,
  _height: 100,
}

export function WallVertical(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WALL_VERTICAL)} />
}
