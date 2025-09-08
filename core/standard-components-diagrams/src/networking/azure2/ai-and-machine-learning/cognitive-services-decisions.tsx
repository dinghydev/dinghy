import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COGNITIVE_SERVICES_DECISIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Cognitive_Services_Decisions.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CognitiveServicesDecisions(props: DiagramNodeProps) {
  return (
    <Shape
      {...COGNITIVE_SERVICES_DECISIONS}
      {...props}
      _style={extendStyle(COGNITIVE_SERVICES_DECISIONS, props)}
    />
  )
}
