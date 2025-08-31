import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEDICATED_EVENT_HUB = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Dedicated_Event_Hub.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 48,
}

export function DedicatedEventHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEDICATED_EVENT_HUB}
      {...props}
      _style={extendStyle(DEDICATED_EVENT_HUB, props)}
    />
  )
}
