import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MACHINE_LEARNING_SERVICE_WORKSPACES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Machine_Learning_Service_Workspaces.svg;strokeColor=none;',
  },
  _width: 46,
  _height: 50,
}

export function MachineLearningServiceWorkspaces(props: DiagramNodeProps) {
  return (
    <Shape
      {...MACHINE_LEARNING_SERVICE_WORKSPACES}
      {...props}
      _style={extendStyle(MACHINE_LEARNING_SERVICE_WORKSPACES, props)}
    />
  )
}
