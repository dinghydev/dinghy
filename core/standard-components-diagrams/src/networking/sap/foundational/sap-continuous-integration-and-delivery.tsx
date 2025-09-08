import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAP_CONTINUOUS_INTEGRATION_AND_DELIVERY = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Continuous_Integration_and_Delivery',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapContinuousIntegrationAndDelivery(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_CONTINUOUS_INTEGRATION_AND_DELIVERY}
      {...props}
      _style={extendStyle(SAP_CONTINUOUS_INTEGRATION_AND_DELIVERY, props)}
    />
  )
}
