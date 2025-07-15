import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPENAI = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_OpenAI.svg;',
  _width: 68,
  _height: 68,
}

export function Openai(props: DiagramNodeProps) {
  return <Shape {...OPENAI} {...props} />
}
