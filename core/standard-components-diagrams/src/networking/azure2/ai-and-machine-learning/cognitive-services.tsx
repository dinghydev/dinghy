import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COGNITIVE_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Cognitive_Services.svg;strokeColor=none;',
  _width: 68,
  _height: 48,
}

export function CognitiveServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...COGNITIVE_SERVICES}
      {...props}
      _style={extendStyle(COGNITIVE_SERVICES, props)}
    />
  )
}
