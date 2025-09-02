import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WALL_U = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.wallU;fillColor=strokeColor;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function WallU(props: DiagramNodeProps) {
  return <Shape {...WALL_U} {...props} _style={extendStyle(WALL_U, props)} />
}
