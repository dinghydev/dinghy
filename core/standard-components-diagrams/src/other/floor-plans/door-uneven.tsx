import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_UNEVEN = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorUneven;dx=0.5;',
  _width: 160,
  _height: 85,
}

export function DoorUneven(props: DiagramNodeProps) {
  return <Shape {...DOOR_UNEVEN} {...props} />
}
