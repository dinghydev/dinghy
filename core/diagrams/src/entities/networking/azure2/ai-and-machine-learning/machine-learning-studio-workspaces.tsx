import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MACHINE_LEARNING_STUDIO_WORKSPACES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Machine_Learning_Studio_Workspaces.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MachineLearningStudioWorkspaces(props: NodeProps) {
  return (
    <Shape
      {...MACHINE_LEARNING_STUDIO_WORKSPACES}
      {...props}
      _style={extendStyle(MACHINE_LEARNING_STUDIO_WORKSPACES, props)}
    />
  )
}
