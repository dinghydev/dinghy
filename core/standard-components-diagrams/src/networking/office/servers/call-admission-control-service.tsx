import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALL_ADMISSION_CONTROL_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.call_admission_control_service;',
  _width: 50,
  _height: 60,
}

export function CallAdmissionControlService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CALL_ADMISSION_CONTROL_SERVICE}
      {...props}
      _style={extendStyle(CALL_ADMISSION_CONTROL_SERVICE, props)}
    />
  )
}
