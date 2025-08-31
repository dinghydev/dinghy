import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_HEALTH_DATA_SERVICES_FOR_FHIR = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Health_Data_Services_for_FHIR',
  },
  _width: 60,
  _height: 60,
}

export function SapHealthDataServicesForFhir(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_HEALTH_DATA_SERVICES_FOR_FHIR}
      {...props}
      _style={extendStyle(SAP_HEALTH_DATA_SERVICES_FOR_FHIR, props)}
    />
  )
}
