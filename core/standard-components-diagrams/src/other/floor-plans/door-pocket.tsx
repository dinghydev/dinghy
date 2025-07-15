import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_POCKET = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorPocket;dx=0.5;',
  _width: 104,
  _height: 10,
}

export function DoorPocket(props: DiagramNodeProps) {
  return <Shape {...DOOR_POCKET} {...props} />
}
