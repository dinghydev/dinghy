import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AI_STUDIO = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/AI_Studio.svg;strokeColor=none;',
  _width: 64,
  _height: 68,
}

export function AiStudio(props: DiagramNodeProps) {
  return <Shape {...AI_STUDIO} {...props} />
}
