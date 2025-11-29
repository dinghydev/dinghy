import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CENTRAL_MANAGEMENT_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.central_management_service;',
  },
  _original_width: 51,
  _original_height: 54,
}

export function CentralManagementService(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CENTRAL_MANAGEMENT_SERVICE)} />
  )
}
