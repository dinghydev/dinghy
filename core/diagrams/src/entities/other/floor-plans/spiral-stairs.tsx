import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPIRAL_STAIRS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.spiral_stairs;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function SpiralStairs(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPIRAL_STAIRS}
      {...props}
      _style={extendStyle(SPIRAL_STAIRS, props)}
    />
  )
}
