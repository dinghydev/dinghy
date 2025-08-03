import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COGNITIVE_SERVICES_DECISIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Cognitive_Services_Decisions.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function CognitiveServicesDecisions(props: DiagramNodeProps) {
  return <Shape {...COGNITIVE_SERVICES_DECISIONS} {...props} />
}
