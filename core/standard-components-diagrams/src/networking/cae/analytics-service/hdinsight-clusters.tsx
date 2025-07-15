import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HDINSIGHT_CLUSTERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/HDInsightClusters.svg;',
  _width: 50,
  _height: 49,
}

export function HdinsightClusters(props: DiagramNodeProps) {
  return <Shape {...HDINSIGHT_CLUSTERS} {...props} />
}
