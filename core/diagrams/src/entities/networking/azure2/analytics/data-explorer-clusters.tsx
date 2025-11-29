import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_EXPLORER_CLUSTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Data_Explorer_Clusters.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DataExplorerClusters(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DATA_EXPLORER_CLUSTERS)} />
  )
}
