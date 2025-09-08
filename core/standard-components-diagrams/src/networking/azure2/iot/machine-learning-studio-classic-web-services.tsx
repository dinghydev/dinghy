import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MACHINE_LEARNING_STUDIO_CLASSIC_WEB_SERVICES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Machine_Learning_Studio_Classic_Web_Services.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MachineLearningStudioClassicWebServices(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...MACHINE_LEARNING_STUDIO_CLASSIC_WEB_SERVICES}
      {...props}
      _style={extendStyle(MACHINE_LEARNING_STUDIO_CLASSIC_WEB_SERVICES, props)}
    />
  )
}
