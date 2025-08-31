import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVENT_HUBS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/analytics/Event_Hubs.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 60,
}

export function EventHubs(props: DiagramNodeProps) {
  return (
    <Shape {...EVENT_HUBS} {...props} _style={extendStyle(EVENT_HUBS, props)} />
  )
}
