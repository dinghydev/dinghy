import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WALL_U = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallU;fillColor=strokeColor;',
  _width: 100,
  _height: 100,
}

export function WallU(props: DiagramNodeProps) {
  return <Shape {...WALL_U} {...props} />
}
