import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EVENT_GRID_SUBSCRIPTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Event_Grid_Subscriptions.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 60,
}

export function EventGridSubscriptions(props: DiagramNodeProps) {
  return (
    <Shape
      {...EVENT_GRID_SUBSCRIPTIONS}
      {...props}
      _style={extendStyle(EVENT_GRID_SUBSCRIPTIONS, props)}
    />
  )
}
