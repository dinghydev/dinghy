import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HDINSIGHT_CLUSTERS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/HDInsightClusters.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 49,
}

export function HdinsightClusters(props: DiagramNodeProps) {
  return (
    <Shape
      {...HDINSIGHT_CLUSTERS}
      {...props}
      _style={extendStyle(HDINSIGHT_CLUSTERS, props)}
    />
  )
}
