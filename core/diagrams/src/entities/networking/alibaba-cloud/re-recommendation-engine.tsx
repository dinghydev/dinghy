import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RE_RECOMMENDATION_ENGINE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.re_recommendation_engine;',
  },
  _original_width: 49.5,
  _original_height: 48.300000000000004,
}

export function ReRecommendationEngine(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, RE_RECOMMENDATION_ENGINE)} />
  )
}
