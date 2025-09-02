import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_AND_CLIENT_3 = {
  _style: {
    entity:
      'edgeStyle=none;endArrow=blockThin;verticalAlign=top;labelBackgroundColor=none;endSize=6;html=1;rounded=0;targetPerimeterSpacing=10;sourcePerimeterSpacing=30;endFill=1;strokeColor=#475E75;',
  },
  _original_width: 2,
  _original_height: 115,
}

export function UserAndClient3(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_AND_CLIENT_3}
      {...props}
      _style={extendStyle(USER_AND_CLIENT_3, props)}
    />
  )
}
