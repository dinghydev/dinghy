import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPUTER_VISION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Computer_Vision.svg;',
  _width: 68,
  _height: 68,
}

export function ComputerVision(props: DiagramNodeProps) {
  return <Shape {...COMPUTER_VISION} {...props} />
}
