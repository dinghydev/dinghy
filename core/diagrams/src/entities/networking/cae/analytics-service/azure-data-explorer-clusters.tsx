import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AZURE_DATA_EXPLORER_CLUSTERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Data_Explorer_Clusters.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureDataExplorerClusters(props: NodeProps) {
  return (
    <Shape
      {...AZURE_DATA_EXPLORER_CLUSTERS}
      {...props}
      _style={extendStyle(AZURE_DATA_EXPLORER_CLUSTERS, props)}
    />
  )
}
