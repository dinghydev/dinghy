import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LANGUAGE_UNDERSTANDING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Language_Understanding.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function LanguageUnderstanding(props: DiagramNodeProps) {
  return (
    <Shape
      {...LANGUAGE_UNDERSTANDING}
      {...props}
      _style={extendStyle(LANGUAGE_UNDERSTANDING, props)}
    />
  )
}
