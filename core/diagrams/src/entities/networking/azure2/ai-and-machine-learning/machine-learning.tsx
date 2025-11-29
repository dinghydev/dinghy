import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MACHINE_LEARNING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Machine_Learning.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 68,
}

export function MachineLearning(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MACHINE_LEARNING)} />
}
