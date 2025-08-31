import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HD_INSIGHT_CLUSTERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/HD_Insight_Clusters.svg;strokeColor=none;',
  },
  _width: 63,
  _height: 62,
}

export function HdInsightClusters(props: DiagramNodeProps) {
  return (
    <Shape
      {...HD_INSIGHT_CLUSTERS}
      {...props}
      _style={extendStyle(HD_INSIGHT_CLUSTERS, props)}
    />
  )
}
