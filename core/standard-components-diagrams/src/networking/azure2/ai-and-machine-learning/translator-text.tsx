import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRANSLATOR_TEXT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Translator_Text.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function TranslatorText(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRANSLATOR_TEXT}
      {...props}
      _style={extendStyle(TRANSLATOR_TEXT, props)}
    />
  )
}
