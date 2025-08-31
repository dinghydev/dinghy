import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIREC_ARTIFICIAL_INTELLIGENCE_RECOMMENDATION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.airec_artificial_intelligence_recommendation;',
  _width: 60,
  _height: 60,
}

export function AirecArtificialIntelligenceRecommendation(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...AIREC_ARTIFICIAL_INTELLIGENCE_RECOMMENDATION}
      {...props}
      _style={extendStyle(AIREC_ARTIFICIAL_INTELLIGENCE_RECOMMENDATION, props)}
    />
  )
}
