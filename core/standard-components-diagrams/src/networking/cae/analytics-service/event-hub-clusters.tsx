import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_HUB_CLUSTERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Event_Hub_Clusters.svg;',
  _width: 50,
  _height: 48,
}

export function EventHubClusters(props: DiagramNodeProps) {
  return <Shape {...EVENT_HUB_CLUSTERS} {...props} />
}
