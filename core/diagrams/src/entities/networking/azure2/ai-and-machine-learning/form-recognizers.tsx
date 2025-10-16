import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FORM_RECOGNIZERS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Form_Recognizers.svg;strokeColor=none;',
  },
  _original_width: 63.2,
  _original_height: 68,
}

export function FormRecognizers(props: DiagramNodeProps) {
  return (
    <Shape
      {...FORM_RECOGNIZERS}
      {...props}
      _style={extendStyle(FORM_RECOGNIZERS, props)}
    />
  )
}
