import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_HUB_CLUSTERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Event_Hub_Clusters.svg;',
  _width: 68,
  _height: 55.24,
}

export function EventHubClusters(props: DiagramNodeProps) {
  return <Shape {...EVENT_HUB_CLUSTERS} {...props} />
}
