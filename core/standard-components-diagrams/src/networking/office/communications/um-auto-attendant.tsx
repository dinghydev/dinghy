import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UM_AUTO_ATTENDANT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.um_auto_attendant;',
  },
  _width: 60,
  _height: 60,
}

export function UmAutoAttendant(props: DiagramNodeProps) {
  return (
    <Shape
      {...UM_AUTO_ATTENDANT}
      {...props}
      _style={extendStyle(UM_AUTO_ATTENDANT, props)}
    />
  )
}
