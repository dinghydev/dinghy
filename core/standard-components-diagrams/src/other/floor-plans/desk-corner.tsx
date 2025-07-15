import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DESK_CORNER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.desk_corner;',
  _width: 150,
  _height: 150,
}

export function DeskCorner(props: DiagramNodeProps) {
  return <Shape {...DESK_CORNER} {...props} />
}
