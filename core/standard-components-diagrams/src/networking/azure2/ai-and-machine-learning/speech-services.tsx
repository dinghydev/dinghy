import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPEECH_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Speech_Services.svg;',
  _width: 68,
  _height: 68,
}

export function SpeechServices(props: DiagramNodeProps) {
  return <Shape {...SPEECH_SERVICES} {...props} />
}
