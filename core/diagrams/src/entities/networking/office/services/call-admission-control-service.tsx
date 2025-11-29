import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALL_ADMISSION_CONTROL_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.call_admission_control_service;',
  },
  _original_width: 50,
  _original_height: 59,
}

export function CallAdmissionControlService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CALL_ADMISSION_CONTROL_SERVICE)}
    />
  )
}
