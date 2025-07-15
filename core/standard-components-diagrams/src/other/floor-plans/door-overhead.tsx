import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_OVERHEAD = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorOverhead;',
  _width: 104,
  _height: 30,
}

export function DoorOverhead(props: DiagramNodeProps) {
  return <Shape {...DOOR_OVERHEAD} {...props} />
}
