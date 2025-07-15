import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRANSLATOR_TEXT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Translator_Text.svg;',
  _width: 68,
  _height: 68,
}

export function TranslatorText(props: DiagramNodeProps) {
  return <Shape {...TRANSLATOR_TEXT} {...props} />
}
