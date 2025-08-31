import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPENAI = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_OpenAI.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Openai(props: DiagramNodeProps) {
  return <Shape {...OPENAI} {...props} _style={extendStyle(OPENAI, props)} />
}
