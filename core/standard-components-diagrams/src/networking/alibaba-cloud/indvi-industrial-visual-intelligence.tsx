import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDVI_INDUSTRIAL_VISUAL_INTELLIGENCE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.indvi_industrial_visual_intelligence;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function IndviIndustrialVisualIntelligence(props: DiagramNodeProps) {
  return <Shape {...INDVI_INDUSTRIAL_VISUAL_INTELLIGENCE} {...props} />
}
