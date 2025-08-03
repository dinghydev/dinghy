import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COGNITIVE_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cognitive_Services.svg;strokeColor=none;',
  _width: 50,
  _height: 30,
}

export function CognitiveServices(props: DiagramNodeProps) {
  return <Shape {...COGNITIVE_SERVICES} {...props} />
}
