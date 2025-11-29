import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WALL_HORIZONTAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wall;fillColor=strokeColor;',
  },
  _width: 100,
  _height: 10,
}

export function WallHorizontal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WALL_HORIZONTAL)} />
}
