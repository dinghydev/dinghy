import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_FABRIC_CLUSTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Service_Fabric_Clusters.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 64,
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
