import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREWALL_3 = {
  _style: {
    entity:
      'endArrow=none;html=1;strokeColor=#c35500;bendable=1;rounded=0;endFill=0;endSize=3;strokeWidth=3;',
  },
  _width: 120,
  _height: 0,
}

export function Firewall3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIREWALL_3)} />
}
