import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCA_SMART_CONVERSATION_ANALYSIS_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sca_smart_conversation_analysis_02;',
  },
  _width: 55.800000000000004,
  _height: 56.1,
}

export function ScaSmartConversationAnalysis2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCA_SMART_CONVERSATION_ANALYSIS_2}
      {...props}
      _style={extendStyle(SCA_SMART_CONVERSATION_ANALYSIS_2, props)}
    />
  )
}
