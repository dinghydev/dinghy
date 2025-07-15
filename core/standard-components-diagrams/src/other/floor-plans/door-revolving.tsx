import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_REVOLVING = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorRevolving;aspect=fixed;',
  _width: 80,
  _height: 85,
}

export function DoorRevolving(props: DiagramNodeProps) {
  return <Shape {...DOOR_REVOLVING} {...props} />
}
