import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VOICE_ASSISTANT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/VoiceAssistant.svg;strokeColor=none;',
  _width: 60.760000000000005,
  _height: 68,
}

export function VoiceAssistant(props: DiagramNodeProps) {
  return <Shape {...VOICE_ASSISTANT} {...props} />
}
