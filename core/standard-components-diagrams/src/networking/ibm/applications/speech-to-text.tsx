import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPEECH_TO_TEXT = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/speech_to_text.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SpeechToText(props: DiagramNodeProps) {
  return <Shape {...SPEECH_TO_TEXT} {...props} />
}
