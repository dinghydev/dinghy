import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUILDING_CLUSTER = {
  _style: {
    entity:
      'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/buildings/Building_Cluster.svg;strokeColor=none;',
  },
  _width: 121.2,
  _height: 111,
}

export function BuildingCluster(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUILDING_CLUSTER)} />
}
