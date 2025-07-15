import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LANGUAGE_UNDERSTANDING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Language_Understanding.svg;',
  _width: 68,
  _height: 68,
}

export function LanguageUnderstanding(props: DiagramNodeProps) {
  return <Shape {...LANGUAGE_UNDERSTANDING} {...props} />
}
