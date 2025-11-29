import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_CLUSTERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Clusters.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function VirtualClusters(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIRTUAL_CLUSTERS)} />
}
