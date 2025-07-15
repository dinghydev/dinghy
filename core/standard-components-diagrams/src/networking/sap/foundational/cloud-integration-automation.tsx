import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_INTEGRATION_AUTOMATION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Cloud_Integration_Automation',
  _width: 50,
  _height: 50,
}

export function CloudIntegrationAutomation(props: DiagramNodeProps) {
  return <Shape {...CLOUD_INTEGRATION_AUTOMATION} {...props} />
}
