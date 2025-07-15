import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_GRID_DOMAINS_AND_SUBSCRIPTIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Event_Grid.svg;',
  _width: 50,
  _height: 50,
}

export function EventGridDomainsAndSubscriptions(props: DiagramNodeProps) {
  return <Shape {...EVENT_GRID_DOMAINS_AND_SUBSCRIPTIONS} {...props} />
}
