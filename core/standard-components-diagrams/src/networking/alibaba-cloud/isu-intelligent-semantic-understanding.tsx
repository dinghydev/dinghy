import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ISU_INTELLIGENT_SEMANTIC_UNDERSTANDING = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.isu_intelligent_semantic_understanding;',
  _width: 47.400000000000006,
  _height: 46.800000000000004,
}

export function IsuIntelligentSemanticUnderstanding(props: DiagramNodeProps) {
  return (
    <Shape
      {...ISU_INTELLIGENT_SEMANTIC_UNDERSTANDING}
      {...props}
      _style={extendStyle(ISU_INTELLIGENT_SEMANTIC_UNDERSTANDING, props)}
    />
  )
}
