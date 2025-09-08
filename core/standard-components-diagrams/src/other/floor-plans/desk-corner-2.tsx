import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DESK_CORNER_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.desk_corner_2;',
  },
  _original_width: 150,
  _original_height: 120,
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
