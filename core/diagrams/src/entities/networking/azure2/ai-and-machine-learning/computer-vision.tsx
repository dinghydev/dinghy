import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPUTER_VISION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Computer_Vision.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
