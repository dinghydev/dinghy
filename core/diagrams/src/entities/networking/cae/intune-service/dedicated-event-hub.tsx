import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEDICATED_EVENT_HUB = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Dedicated_Event_Hub.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function DedicatedEventHub(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEDICATED_EVENT_HUB)} />
}
