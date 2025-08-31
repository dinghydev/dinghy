import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTEGRATION_ADVISOR = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Integration_Advisor',
  _width: 60,
  _height: 60,
}

export function IntegrationAdvisor(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTEGRATION_ADVISOR}
      {...props}
      _style={extendStyle(INTEGRATION_ADVISOR, props)}
    />
  )
}
