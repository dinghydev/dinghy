import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MACHINE_LEARNING_STUDIO_WEB_SERVICE_PLANS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Machine_Learning_Studio_Web_Service_Plans.svg;',
  _width: 68,
  _height: 68,
}

export function MachineLearningStudioWebServicePlans(props: DiagramNodeProps) {
  return <Shape {...MACHINE_LEARNING_STUDIO_WEB_SERVICE_PLANS} {...props} />
}
