import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOM_VISION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Custom_Vision.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function CustomVision(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOM_VISION}
      {...props}
      _style={extendStyle(CUSTOM_VISION, props)}
    />
  )
}
