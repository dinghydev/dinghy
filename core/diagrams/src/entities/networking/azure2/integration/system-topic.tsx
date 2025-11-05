import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SYSTEM_TOPIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/System_Topic.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function SystemTopic(props: NodeProps) {
  return (
    <Shape
      {...SYSTEM_TOPIC}
      {...props}
      _style={extendStyle(SYSTEM_TOPIC, props)}
    />
  )
}
