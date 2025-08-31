import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLIED_AI = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_Applied_AI.svg;strokeColor=none;',
  _width: 68,
  _height: 52,
}

export function AppliedAi(props: DiagramNodeProps) {
  return (
    <Shape {...APPLIED_AI} {...props} _style={extendStyle(APPLIED_AI, props)} />
  )
}
