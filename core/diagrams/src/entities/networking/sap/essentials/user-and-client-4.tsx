import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_AND_CLIENT_4 = {
  _style: {
    entity:
      'edgeStyle=none;endArrow=blockThin;verticalAlign=top;labelBackgroundColor=none;endSize=6;html=1;rounded=0;targetPerimeterSpacing=10;sourcePerimeterSpacing=10;endFill=1;strokeColor=#475E75;',
  },
  _width: 3,
  _height: 115,
}

export function UserAndClient4(props: NodeProps) {
  return (
    <Shape
      {...USER_AND_CLIENT_4}
      {...props}
      _style={extendStyle(USER_AND_CLIENT_4, props)}
    />
  )
}
