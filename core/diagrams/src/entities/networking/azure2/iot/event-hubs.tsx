import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EVENT_HUBS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Event_Hubs.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 60,
}

export function EventHubs(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EVENT_HUBS)} />
}
