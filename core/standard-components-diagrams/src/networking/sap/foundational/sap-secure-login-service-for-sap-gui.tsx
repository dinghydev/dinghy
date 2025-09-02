import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_SECURE_LOGIN_SERVICE_FOR_SAP_GUI = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Secure_Login_Service_for_SAP_GUI',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapSecureLoginServiceForSapGui(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_SECURE_LOGIN_SERVICE_FOR_SAP_GUI}
      {...props}
      _style={extendStyle(SAP_SECURE_LOGIN_SERVICE_FOR_SAP_GUI, props)}
    />
  )
}
