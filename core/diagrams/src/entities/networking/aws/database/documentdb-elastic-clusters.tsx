import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCUMENTDB_ELASTIC_CLUSTERS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.documentdb_elastic_clusters;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function DocumentdbElasticClusters(props: NodeProps) {
  return (
    <Shape
      {...DOCUMENTDB_ELASTIC_CLUSTERS}
      {...props}
      _style={extendStyle(DOCUMENTDB_ELASTIC_CLUSTERS, props)}
    />
  )
}
