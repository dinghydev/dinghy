import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVICE_FABRIC_CLUSTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Service_Fabric_Clusters.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 64,
}

export function ServiceFabricClusters(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_FABRIC_CLUSTERS}
      {...props}
      _style={extendStyle(SERVICE_FABRIC_CLUSTERS, props)}
    />
  )
}
