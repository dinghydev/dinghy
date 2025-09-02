import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDVI_INDUSTRIAL_VISUAL_INTELLIGENCE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.indvi_industrial_visual_intelligence;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function IndviIndustrialVisualIntelligence(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDVI_INDUSTRIAL_VISUAL_INTELLIGENCE}
      {...props}
      _style={extendStyle(INDVI_INDUSTRIAL_VISUAL_INTELLIGENCE, props)}
    />
  )
}
