import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CENTRAL_MANAGEMENT_SERVICE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.central_management_service;',
  _width: 51,
  _height: 54,
}

export function CentralManagementService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CENTRAL_MANAGEMENT_SERVICE}
      {...props}
      _style={extendStyle(CENTRAL_MANAGEMENT_SERVICE, props)}
    />
  )
}
