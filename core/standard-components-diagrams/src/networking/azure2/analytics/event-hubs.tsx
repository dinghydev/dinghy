import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_HUBS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Event_Hubs.svg;strokeColor=none;',
  _width: 67,
  _height: 60,
}

export function EventHubs(props: DiagramNodeProps) {
  return <Shape {...EVENT_HUBS} {...props} />
}
