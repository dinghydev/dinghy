import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_DOCUMENT_MANAGEMENT_SERVICE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Document_Management_Service',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapDocumentManagementService(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_DOCUMENT_MANAGEMENT_SERVICE}
      {...props}
      _style={extendStyle(SAP_DOCUMENT_MANAGEMENT_SERVICE, props)}
    />
  )
}
