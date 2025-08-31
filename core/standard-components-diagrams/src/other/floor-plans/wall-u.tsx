import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_U = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallU;fillColor=strokeColor;',
  _width: 60,
  _height: 60,
}

export function WallU(props: DiagramNodeProps) {
  return <Shape {...WALL_U} {...props} _style={extendStyle(WALL_U, props)} />
}
