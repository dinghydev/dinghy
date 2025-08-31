import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUILDING_CLUSTER = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Building_Cluster.svg;strokeColor=none;',
  _width: 121.2,
  _height: 111,
}

export function BuildingCluster(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUILDING_CLUSTER}
      {...props}
      _style={extendStyle(BUILDING_CLUSTER, props)}
    />
  )
}
