import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_VERTICAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wall;fillColor=strokeColor;direction=south;',
  },
  _width: 10,
  _height: 100,
}

export function WallVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...WALL_VERTICAL}
      {...props}
      _style={extendStyle(WALL_VERTICAL, props)}
    />
  )
}
