import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCA_SMART_CONVERSATION_ANALYSIS_2 = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sca_smart_conversation_analysis_02;',
  },
  _original_width: 55.800000000000004,
  _original_height: 56.1,
}

export function ScaSmartConversationAnalysis2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, SCA_SMART_CONVERSATION_ANALYSIS_2)}
    />
  )
}
