import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUBSCRIPTIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Subscriptions.svg;strokeColor=none;',
  },
  _width: 44,
  _height: 71,
}

export function Subscriptions(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUBSCRIPTIONS)} />
}
