import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_GRID_SUBSCRIPTIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Event_Grid_Subscriptions.svg;',
  _width: 67,
  _height: 60,
}

export function EventGridSubscriptions(props: DiagramNodeProps) {
  return <Shape {...EVENT_GRID_SUBSCRIPTIONS} {...props} />
}
