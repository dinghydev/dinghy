import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVENT_GRID_TOPICS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Event_Grid_Topics.svg;strokeColor=none;',
  _width: 67,
  _height: 60,
}

export function EventGridTopics(props: DiagramNodeProps) {
  return (
    <Shape
      {...EVENT_GRID_TOPICS}
      {...props}
      _style={extendStyle(EVENT_GRID_TOPICS, props)}
    />
  )
}
