import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MACHINE_LEARNING_STUDIO_WEB_SERVICE_PLANS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Machine_Learning_Studio_Web_Service_Plans.svg;',
  _width: 50,
  _height: 50,
}

export function MachineLearningStudioWebServicePlans(props: DiagramNodeProps) {
  return <Shape {...MACHINE_LEARNING_STUDIO_WEB_SERVICE_PLANS} {...props} />
}
