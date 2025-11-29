import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOSTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Hosts.svg;strokeColor=none;',
  },
  _original_width: 57.199999999999996,
  _original_height: 68,
}

export function Hosts(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HOSTS)} />
}
