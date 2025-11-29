import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BATCH_AI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Batch_AI.svg;strokeColor=none;',
  },
  _width: 48,
  _height: 68,
}

export function BatchAi(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BATCH_AI)} />
}
