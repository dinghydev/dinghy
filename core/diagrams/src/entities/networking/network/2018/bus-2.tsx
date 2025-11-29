import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUS_2 = {
  _style: {
    entity:
      'strokeColor=#6881B3;edgeStyle=none;rounded=0;endArrow=none;html=1;strokeWidth=2;',
  },
  _width: 1,
  _height: 140,
}

export function Bus2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUS_2)} />
}
