import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLIED_AI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_Applied_AI.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 52,
}

export function AppliedAi(props: DiagramNodeProps) {
  return (
    <Shape {...APPLIED_AI} {...props} _style={extendStyle(APPLIED_AI, props)} />
  )
}
