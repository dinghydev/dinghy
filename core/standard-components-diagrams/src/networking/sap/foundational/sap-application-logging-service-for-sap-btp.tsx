import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_APPLICATION_LOGGING_SERVICE_FOR_SAP_BTP = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Application_Logging_service_for_SAP_BTP',
  _width: 50,
  _height: 50,
}

export function SapApplicationLoggingServiceForSapBtp(props: DiagramNodeProps) {
  return <Shape {...SAP_APPLICATION_LOGGING_SERVICE_FOR_SAP_BTP} {...props} />
}
