import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MACHINE_LEARNING_STUDIO_WEB_SERVICES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Machine_Learning_Studio_Web_Services.svg;',
  _width: 50,
  _height: 50,
}

export function MachineLearningStudioWebServices(props: DiagramNodeProps) {
  return <Shape {...MACHINE_LEARNING_STUDIO_WEB_SERVICES} {...props} />
}
