import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_HUB_CLUSTERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Event_Hub_Clusters.svg;strokeColor=none;',
  _width: 64,
  _height: 52,
}

export function EventHubClusters(props: DiagramNodeProps) {
  return <Shape {...EVENT_HUB_CLUSTERS} {...props} />
}
