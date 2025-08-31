import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPEECH_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Speech_Services.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function SpeechServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPEECH_SERVICES}
      {...props}
      _style={extendStyle(SPEECH_SERVICES, props)}
    />
  )
}
