import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOICE_ASSISTANT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/VoiceAssistant.svg;strokeColor=none;',
  },
  _original_width: 60.760000000000005,
  _original_height: 68,
}

export function VoiceAssistant(props: NodeProps) {
  return (
    <Shape
      {...VOICE_ASSISTANT}
      {...props}
      _style={extendStyle(VOICE_ASSISTANT, props)}
    />
  )
}
