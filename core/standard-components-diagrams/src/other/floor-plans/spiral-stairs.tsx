import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPIRAL_STAIRS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.spiral_stairs;',
  },
  _width: 200,
  _height: 200,
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
