import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MACHINE_LEARNING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Machine_Learning.svg;',
  _width: 64,
  _height: 68,
}

export function MachineLearning(props: DiagramNodeProps) {
  return <Shape {...MACHINE_LEARNING} {...props} />
}
