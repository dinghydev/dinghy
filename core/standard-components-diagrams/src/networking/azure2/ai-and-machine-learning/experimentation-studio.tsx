import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXPERIMENTATION_STUDIO = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Azure_Experimentation_Studio.svg;',
  _width: 68,
  _height: 56.00000000000001,
}

export function ExperimentationStudio(props: DiagramNodeProps) {
  return <Shape {...EXPERIMENTATION_STUDIO} {...props} />
}
