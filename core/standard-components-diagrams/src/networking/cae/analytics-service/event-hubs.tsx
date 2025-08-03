import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EVENT_HUBS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Event_Hubs.svg;strokeColor=none;',
  _width: 48,
  _height: 50,
}

export function EventHubs(props: DiagramNodeProps) {
  return <Shape {...EVENT_HUBS} {...props} />
}
