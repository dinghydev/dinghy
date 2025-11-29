import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JOURNEY_HUB = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Journey_Hub.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function JourneyHub(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JOURNEY_HUB)} />
}
