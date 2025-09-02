import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESK_CORNER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.desk_corner;',
  },
  _original_width: 150,
  _original_height: 150,
}

export function DeskCorner(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESK_CORNER}
      {...props}
      _style={extendStyle(DESK_CORNER, props)}
    />
  )
}
