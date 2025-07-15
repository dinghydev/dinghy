import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JOURNEY_HUB = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Journey_Hub.svg;',
  _width: 60,
  _height: 63,
}

export function JourneyHub(props: DiagramNodeProps) {
  return <Shape {...JOURNEY_HUB} {...props} />
}
