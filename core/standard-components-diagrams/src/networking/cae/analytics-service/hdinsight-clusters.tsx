import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HDINSIGHT_CLUSTERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/HDInsightClusters.svg;strokeColor=none;',
  _width: 50,
  _height: 49,
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
