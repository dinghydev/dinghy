import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_EXPLORER_CLUSTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Data_Explorer_Clusters.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function DataExplorerClusters(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_EXPLORER_CLUSTERS}
      {...props}
      _style={extendStyle(DATA_EXPLORER_CLUSTERS, props)}
    />
  )
}
