import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_DATA_EXPLORER_CLUSTERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Data_Explorer_Clusters.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AzureDataExplorerClusters(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_DATA_EXPLORER_CLUSTERS}
      {...props}
      _style={extendStyle(AZURE_DATA_EXPLORER_CLUSTERS, props)}
    />
  )
}
