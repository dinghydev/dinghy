import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLIED_AI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_Applied_AI.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 52,
}

export function AppliedAi(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APPLIED_AI)} />
}
