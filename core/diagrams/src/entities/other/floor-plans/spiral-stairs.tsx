import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPIRAL_STAIRS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.spiral_stairs;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function SpiralStairs(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPIRAL_STAIRS)} />
}
