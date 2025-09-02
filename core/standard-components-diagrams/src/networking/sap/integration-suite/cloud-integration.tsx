import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_INTEGRATION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Integration_Suite_-_Cloud_Integration',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CloudIntegration(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_INTEGRATION}
      {...props}
      _style={extendStyle(CLOUD_INTEGRATION, props)}
    />
  )
}
