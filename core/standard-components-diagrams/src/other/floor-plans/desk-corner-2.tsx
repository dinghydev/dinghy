import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESK_CORNER_2 = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.desk_corner_2;',
  _width: 150,
  _height: 120,
}

export function DeskCorner2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESK_CORNER_2}
      {...props}
      _style={extendStyle(DESK_CORNER_2, props)}
    />
  )
}
