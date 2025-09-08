import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PORANA_PORTRAIT_ANALYSIS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.porana_portrait_analysis;',
  },
  _original_width: 49.199999999999996,
  _original_height: 45.3,
}

export function PoranaPortraitAnalysis(props: DiagramNodeProps) {
  return (
    <Shape
      {...PORANA_PORTRAIT_ANALYSIS}
      {...props}
      _style={extendStyle(PORANA_PORTRAIT_ANALYSIS, props)}
    />
  )
}
