import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_INTEGRATION_AUTOMATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Cloud_Integration_Automation',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CloudIntegrationAutomation(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_INTEGRATION_AUTOMATION}
      {...props}
      _style={extendStyle(CLOUD_INTEGRATION_AUTOMATION, props)}
    />
  )
}
