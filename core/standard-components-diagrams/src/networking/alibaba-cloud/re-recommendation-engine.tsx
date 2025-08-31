import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RE_RECOMMENDATION_ENGINE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.re_recommendation_engine;',
  _width: 49.5,
  _height: 48.300000000000004,
}

export function ReRecommendationEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...RE_RECOMMENDATION_ENGINE}
      {...props}
      _style={extendStyle(RE_RECOMMENDATION_ENGINE, props)}
    />
  )
}
