import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CUSTOM_VISION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Custom_Vision.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function CustomVision(props: DiagramNodeProps) {
  return <Shape {...CUSTOM_VISION} {...props} />
}
