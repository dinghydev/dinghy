import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CONVERSATION_TRAINED_DEPLOYED = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/data/conversation_trained_deployed.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ConversationTrainedDeployed(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONVERSATION_TRAINED_DEPLOYED}
      {...props}
      _style={extendStyle(CONVERSATION_TRAINED_DEPLOYED, props)}
    />
  )
}
