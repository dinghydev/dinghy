import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DOOR_ACCORDION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorAccordion;dx=0.6;',
  },
  _original_width: 160,
  _original_height: 30,
}

export function DoorAccordion(props: DiagramNodeProps) {
  return (
    <Shape
      {...DOOR_ACCORDION}
      {...props}
      _style={extendStyle(DOOR_ACCORDION, props)}
    />
  )
}
