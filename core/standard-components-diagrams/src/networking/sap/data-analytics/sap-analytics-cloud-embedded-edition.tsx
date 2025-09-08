import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SAP_ANALYTICS_CLOUD_EMBEDDED_EDITION = {
  _style: {
    entity:
      'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=SAP_Analytics_Cloud_Embedded_Edition',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SapAnalyticsCloudEmbeddedEdition(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_ANALYTICS_CLOUD_EMBEDDED_EDITION}
      {...props}
      _style={extendStyle(SAP_ANALYTICS_CLOUD_EMBEDDED_EDITION, props)}
    />
  )
}
