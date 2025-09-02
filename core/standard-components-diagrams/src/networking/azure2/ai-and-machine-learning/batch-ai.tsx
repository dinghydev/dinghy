import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATCH_AI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Batch_AI.svg;strokeColor=none;',
  },
  _original_width: 48,
  _original_height: 68,
}

export function BatchAi(props: DiagramNodeProps) {
  return (
    <Shape {...BATCH_AI} {...props} _style={extendStyle(BATCH_AI, props)} />
  )
}
