import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_BTP_ABAP_ENVIRONMENT = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_BTP,_ABAP_environment',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapBtpAbapEnvironment(props: NodeProps) {
  return (
    <Shape
      {...SAP_BTP_ABAP_ENVIRONMENT}
      {...props}
      _style={extendStyle(SAP_BTP_ABAP_ENVIRONMENT, props)}
    />
  )
}
