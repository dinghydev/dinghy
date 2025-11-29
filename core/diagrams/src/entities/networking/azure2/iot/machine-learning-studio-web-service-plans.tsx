import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MACHINE_LEARNING_STUDIO_WEB_SERVICE_PLANS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Machine_Learning_Studio_Web_Service_Plans.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MachineLearningStudioWebServicePlans(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MACHINE_LEARNING_STUDIO_WEB_SERVICE_PLANS)}
    />
  )
}
