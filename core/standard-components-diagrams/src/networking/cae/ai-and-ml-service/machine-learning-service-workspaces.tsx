import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MACHINE_LEARNING_SERVICE_WORKSPACES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Machine_Learning_Service_Workspaces.svg;',
  _width: 46,
  _height: 50,
}

export function MachineLearningServiceWorkspaces(props: DiagramNodeProps) {
  return <Shape {...MACHINE_LEARNING_SERVICE_WORKSPACES} {...props} />
}
