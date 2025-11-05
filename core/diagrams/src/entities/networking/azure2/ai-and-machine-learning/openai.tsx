import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPENAI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_OpenAI.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Openai(props: NodeProps) {
  return <Shape {...OPENAI} {...props} _style={extendStyle(OPENAI, props)} />
}
