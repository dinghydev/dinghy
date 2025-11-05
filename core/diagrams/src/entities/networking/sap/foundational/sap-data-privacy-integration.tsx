import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SAP_DATA_PRIVACY_INTEGRATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Data_Privacy_Integration',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapDataPrivacyIntegration(props: NodeProps) {
  return (
    <Shape
      {...SAP_DATA_PRIVACY_INTEGRATION}
      {...props}
      _style={extendStyle(SAP_DATA_PRIVACY_INTEGRATION, props)}
    />
  )
}
