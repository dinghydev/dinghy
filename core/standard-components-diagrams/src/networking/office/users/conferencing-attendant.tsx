import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONFERENCING_ATTENDANT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.conferencing_attendant;',
  },
  _original_width: 53,
  _original_height: 59,
}

export function ConferencingAttendant(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONFERENCING_ATTENDANT}
      {...props}
      _style={extendStyle(CONFERENCING_ATTENDANT, props)}
    />
  )
}
