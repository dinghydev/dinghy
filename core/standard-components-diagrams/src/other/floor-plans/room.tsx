import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROOM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.room;fillColor=strokeColor;',
  },
  _width: 60,
  _height: 60,
}

export function Room(props: DiagramNodeProps) {
  return <Shape {...ROOM} {...props} _style={extendStyle(ROOM, props)} />
}
