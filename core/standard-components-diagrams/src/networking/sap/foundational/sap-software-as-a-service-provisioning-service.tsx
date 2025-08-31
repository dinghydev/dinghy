import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_SOFTWARE_AS_A_SERVICE_PROVISIONING_SERVICE = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Software_as_a_Service_Provisioning_Service',
  _width: 60,
  _height: 60,
}

export function SapSoftwareAsAServiceProvisioningService(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SAP_SOFTWARE_AS_A_SERVICE_PROVISIONING_SERVICE}
      {...props}
      _style={extendStyle(
        SAP_SOFTWARE_AS_A_SERVICE_PROVISIONING_SERVICE,
        props,
      )}
    />
  )
}
