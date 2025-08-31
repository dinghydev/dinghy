import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_AUTHORIZATION_AND_TRUST_MANAGEMENT_SERVICE = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Authorization_and_Trust_Management_service',
  },
  _width: 60,
  _height: 60,
}

export function SapAuthorizationAndTrustManagementService(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SAP_AUTHORIZATION_AND_TRUST_MANAGEMENT_SERVICE}
      {...props}
      _style={extendStyle(
        SAP_AUTHORIZATION_AND_TRUST_MANAGEMENT_SERVICE,
        props,
      )}
    />
  )
}
