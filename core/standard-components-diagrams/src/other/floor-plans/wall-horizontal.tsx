import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_HORIZONTAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wall;fillColor=strokeColor;',
  },
  _original_width: 100,
  _original_height: 10,
}

export function WallHorizontal(props: DiagramNodeProps) {
  return (
    <Shape
      {...WALL_HORIZONTAL}
      {...props}
      _style={extendStyle(WALL_HORIZONTAL, props)}
    />
  )
}
