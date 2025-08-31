import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MACHINE_LEARNING_STUDIO_WORKSPACES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Machine_Learning_Studio_Workspaces.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function MachineLearningStudioWorkspaces(props: DiagramNodeProps) {
  return (
    <Shape
      {...MACHINE_LEARNING_STUDIO_WORKSPACES}
      {...props}
      _style={extendStyle(MACHINE_LEARNING_STUDIO_WORKSPACES, props)}
    />
  )
}
