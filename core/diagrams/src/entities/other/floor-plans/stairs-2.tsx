import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STAIRS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.stairs;direction=south;',
  },
  _width: 100,
  _height: 300,
}

export function Stairs2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STAIRS_2)} />
}
