import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_CLUSTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Virtual_Clusters.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 64,
}

export function VirtualClusters(props: NodeProps) {
  return (
    <Shape
      {...VIRTUAL_CLUSTERS}
      {...props}
      _style={extendStyle(VIRTUAL_CLUSTERS, props)}
    />
  )
}
