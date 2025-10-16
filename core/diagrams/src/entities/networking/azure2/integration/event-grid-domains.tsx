import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EVENT_GRID_DOMAINS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Event_Grid_Domains.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 60,
}

export function EventGridDomains(props: DiagramNodeProps) {
  return (
    <Shape
      {...EVENT_GRID_DOMAINS}
      {...props}
      _style={extendStyle(EVENT_GRID_DOMAINS, props)}
    />
  )
}
