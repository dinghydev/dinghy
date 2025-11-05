import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEXT_TO_SPEECH = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/miscellaneous/text_to_speech.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function TextToSpeech(props: NodeProps) {
  return (
    <Shape
      {...TEXT_TO_SPEECH}
      {...props}
      _style={extendStyle(TEXT_TO_SPEECH, props)}
    />
  )
}
