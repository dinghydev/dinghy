import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_AND_CLIENT_3 = {
  _style: {
    entity:
      'edgeStyle=none;endArrow=blockThin;verticalAlign=top;labelBackgroundColor=none;endSize=6;html=1;rounded=0;targetPerimeterSpacing=10;sourcePerimeterSpacing=30;endFill=1;strokeColor=#475E75;',
  },
  _width: 2,
  _height: 115,
}

export function UserAndClient3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USER_AND_CLIENT_3)} />
}
