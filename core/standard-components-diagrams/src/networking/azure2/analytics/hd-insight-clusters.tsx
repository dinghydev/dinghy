import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HD_INSIGHT_CLUSTERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/HD_Insight_Clusters.svg;',
  _width: 63,
  _height: 62,
}

export function HdInsightClusters(props: DiagramNodeProps) {
  return <Shape {...HD_INSIGHT_CLUSTERS} {...props} />
}
