import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_ANALYTICS_CLOUD = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Analytics_Cloud',
  _width: 60,
  _height: 60,
}

export function SapAnalyticsCloud(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_ANALYTICS_CLOUD}
      {...props}
      _style={extendStyle(SAP_ANALYTICS_CLOUD, props)}
    />
  )
}
