import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUILDING_CLUSTER = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Building_Cluster.svg;',
  _width: 121.2,
  _height: 111,
}

export function BuildingCluster(props: DiagramNodeProps) {
  return <Shape {...BUILDING_CLUSTER} {...props} />
}
