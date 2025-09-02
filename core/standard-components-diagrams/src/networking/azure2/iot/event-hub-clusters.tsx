import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVENT_HUB_CLUSTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Event_Hub_Clusters.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 55.24,
}

export function EventHubClusters(props: DiagramNodeProps) {
  return (
    <Shape
      {...EVENT_HUB_CLUSTERS}
      {...props}
      _style={extendStyle(EVENT_HUB_CLUSTERS, props)}
    />
  )
}
