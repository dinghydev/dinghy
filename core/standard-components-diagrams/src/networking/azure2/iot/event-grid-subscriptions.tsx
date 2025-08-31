import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVENT_GRID_SUBSCRIPTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Event_Grid_Domains.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 60,
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
