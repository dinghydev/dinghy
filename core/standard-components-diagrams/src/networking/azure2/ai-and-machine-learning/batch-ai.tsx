import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BATCH_AI = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Batch_AI.svg;strokeColor=none;',
  _width: 48,
  _height: 68,
}

export function BatchAi(props: DiagramNodeProps) {
  return <Shape {...BATCH_AI} {...props} />
}
