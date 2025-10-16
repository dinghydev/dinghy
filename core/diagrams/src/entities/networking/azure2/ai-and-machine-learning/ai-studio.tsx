import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AI_STUDIO = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/AI_Studio.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 68,
}

export function AiStudio(props: DiagramNodeProps) {
  return (
    <Shape {...AI_STUDIO} {...props} _style={extendStyle(AI_STUDIO, props)} />
  )
}
