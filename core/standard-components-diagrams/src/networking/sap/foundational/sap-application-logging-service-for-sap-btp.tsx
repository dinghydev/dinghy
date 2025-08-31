import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_APPLICATION_LOGGING_SERVICE_FOR_SAP_BTP = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Application_Logging_service_for_SAP_BTP',
  },
  _width: 60,
  _height: 60,
}

export function SapApplicationLoggingServiceForSapBtp(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_APPLICATION_LOGGING_SERVICE_FOR_SAP_BTP}
      {...props}
      _style={extendStyle(SAP_APPLICATION_LOGGING_SERVICE_FOR_SAP_BTP, props)}
    />
  )
}
