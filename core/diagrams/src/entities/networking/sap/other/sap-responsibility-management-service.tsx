import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAP_RESPONSIBILITY_MANAGEMENT_SERVICE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Responsibility_Management_Service',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapResponsibilityManagementService(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_RESPONSIBILITY_MANAGEMENT_SERVICE}
      {...props}
      _style={extendStyle(SAP_RESPONSIBILITY_MANAGEMENT_SERVICE, props)}
    />
  )
}
