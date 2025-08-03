import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MACHINE_LEARNING_STUDIO_CLASSIC_WEB_SERVICES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Machine_Learning_Studio_Classic_Web_Services.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function MachineLearningStudioClassicWebServices(
  props: DiagramNodeProps,
) {
  return <Shape {...MACHINE_LEARNING_STUDIO_CLASSIC_WEB_SERVICES} {...props} />
}
