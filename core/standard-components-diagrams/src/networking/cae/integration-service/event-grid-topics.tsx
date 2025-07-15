import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_GRID_TOPICS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Event_Grid_Topics.svg;',
  _width: 50,
  _height: 50,
}

export function EventGridTopics(props: DiagramNodeProps) {
  return <Shape {...EVENT_GRID_TOPICS} {...props} />
}
