import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VOICEBOT_INTELLIGENT_VOICE_NAVIGATION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.voicebot_intelligent_voice_navigation;',
  },
  _original_width: 58.8,
  _original_height: 57,
}

export function VoicebotIntelligentVoiceNavigation(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOICEBOT_INTELLIGENT_VOICE_NAVIGATION}
      {...props}
      _style={extendStyle(VOICEBOT_INTELLIGENT_VOICE_NAVIGATION, props)}
    />
  )
}
