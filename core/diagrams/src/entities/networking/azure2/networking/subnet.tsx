import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUBNET = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Subnet.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 40.72,
}

export function Subnet(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SUBNET)} />
}
