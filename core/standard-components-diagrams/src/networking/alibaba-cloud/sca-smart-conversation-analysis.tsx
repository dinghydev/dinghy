import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCA_SMART_CONVERSATION_ANALYSIS = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sca_smart_conversation_analysis_01;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function ScaSmartConversationAnalysis(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCA_SMART_CONVERSATION_ANALYSIS}
      {...props}
      _style={extendStyle(SCA_SMART_CONVERSATION_ANALYSIS, props)}
    />
  )
}
