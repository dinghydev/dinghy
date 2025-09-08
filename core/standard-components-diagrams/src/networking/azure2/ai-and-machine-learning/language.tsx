import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LANGUAGE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Language_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Language(props: DiagramNodeProps) {
  return (
    <Shape {...LANGUAGE} {...props} _style={extendStyle(LANGUAGE, props)} />
  )
}
