import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JOURNEY_HUB = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Journey_Hub.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function JourneyHub(props: DiagramNodeProps) {
  return (
    <Shape
      {...JOURNEY_HUB}
      {...props}
      _style={extendStyle(JOURNEY_HUB, props)}
    />
  )
}
