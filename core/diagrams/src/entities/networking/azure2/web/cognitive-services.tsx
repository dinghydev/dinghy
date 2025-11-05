import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COGNITIVE_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Cognitive_Services.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function CognitiveServices(props: NodeProps) {
  return (
    <Shape
      {...COGNITIVE_SERVICES}
      {...props}
      _style={extendStyle(COGNITIVE_SERVICES, props)}
    />
  )
}
