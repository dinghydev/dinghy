import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVENT_HUB_CLUSTERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Event_Hub_Clusters.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
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
