import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEDICATED_EVENT_HUB = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Dedicated_Event_Hub.svg;',
  _width: 50,
  _height: 48,
}

export function DedicatedEventHub(props: DiagramNodeProps) {
  return <Shape {...DEDICATED_EVENT_HUB} {...props} />
}
