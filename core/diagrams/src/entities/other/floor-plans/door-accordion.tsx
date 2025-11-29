import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOOR_ACCORDION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.doorAccordion;dx=0.6;',
  },
  _width: 160,
  _height: 30,
}

export function DoorAccordion(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOOR_ACCORDION)} />
}
