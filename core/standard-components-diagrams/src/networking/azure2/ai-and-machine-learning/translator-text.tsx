import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRANSLATOR_TEXT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Translator_Text.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
