import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOOR_ACCORDION = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorAccordion;dx=0.6;',
  _width: 160,
  _height: 30,
}

export function DoorAccordion(props: DiagramNodeProps) {
  return <Shape {...DOOR_ACCORDION} {...props} />
}
