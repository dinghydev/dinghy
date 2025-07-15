import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROOM = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.room;fillColor=strokeColor;',
  _width: 100,
  _height: 100,
}

export function Room(props: DiagramNodeProps) {
  return <Shape {...ROOM} {...props} />
}
