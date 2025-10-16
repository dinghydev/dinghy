import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTEGRATION_ASSESSMENT = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Integration_Assessment',
  },
  _original_width: 50,
  _original_height: 50,
}

export function IntegrationAssessment(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTEGRATION_ASSESSMENT}
      {...props}
      _style={extendStyle(INTEGRATION_ASSESSMENT, props)}
    />
  )
}
