import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WALL_HORIZONTAL = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wall;fillColor=strokeColor;',
  _width: 100,
  _height: 10,
}

export function WallHorizontal(props: DiagramNodeProps) {
  return <Shape {...WALL_HORIZONTAL} {...props} />
}
