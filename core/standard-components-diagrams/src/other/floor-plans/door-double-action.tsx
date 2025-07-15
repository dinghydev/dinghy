import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_DOUBLE_ACTION = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorDoubleAction;aspect=fixed;',
  _width: 80,
  _height: 165,
}

export function DoorDoubleAction(props: DiagramNodeProps) {
  return <Shape {...DOOR_DOUBLE_ACTION} {...props} />
}
