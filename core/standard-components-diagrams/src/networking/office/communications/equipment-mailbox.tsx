import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EQUIPMENT_MAILBOX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.equipment_mailbox;',
  },
  _original_width: 59,
  _original_height: 59,
}

export function EquipmentMailbox(props: DiagramNodeProps) {
  return (
    <Shape
      {...EQUIPMENT_MAILBOX}
      {...props}
      _style={extendStyle(EQUIPMENT_MAILBOX, props)}
    />
  )
}
