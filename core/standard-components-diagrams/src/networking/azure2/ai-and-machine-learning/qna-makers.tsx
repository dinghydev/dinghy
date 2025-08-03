import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QNA_MAKERS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/QnA_Makers.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function QnaMakers(props: DiagramNodeProps) {
  return <Shape {...QNA_MAKERS} {...props} />
}
