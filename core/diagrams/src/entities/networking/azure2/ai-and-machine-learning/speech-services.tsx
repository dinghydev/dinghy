import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPEECH_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Speech_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function SpeechServices(props: NodeProps) {
  return (
    <Shape
      {...SPEECH_SERVICES}
      {...props}
      _style={extendStyle(SPEECH_SERVICES, props)}
    />
  )
}
