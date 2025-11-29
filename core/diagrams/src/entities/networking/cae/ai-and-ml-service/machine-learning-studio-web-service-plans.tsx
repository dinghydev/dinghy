import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MACHINE_LEARNING_STUDIO_WEB_SERVICE_PLANS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Machine_Learning_Studio_Web_Service_Plans.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function MachineLearningStudioWebServicePlans(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MACHINE_LEARNING_STUDIO_WEB_SERVICE_PLANS)}
    />
  )
}
