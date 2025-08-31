import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTER_VISION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Computer_Vision.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function ComputerVision(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTER_VISION}
      {...props}
      _style={extendStyle(COMPUTER_VISION, props)}
    />
  )
}
