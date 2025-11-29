import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DESK_CORNER_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.desk_corner_2;',
  },
  _width: 150,
  _height: 120,
}

export function DeskCorner2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DESK_CORNER_2)} />
}
