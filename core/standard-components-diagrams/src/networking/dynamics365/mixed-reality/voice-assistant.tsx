import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOICE_ASSISTANT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/VoiceAssistant.svg;strokeColor=none;',
  },
  _width: 60.760000000000005,
  _height: 68,
}

export function VoiceAssistant(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOICE_ASSISTANT}
      {...props}
      _style={extendStyle(VOICE_ASSISTANT, props)}
    />
  )
}
