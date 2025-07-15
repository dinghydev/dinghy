import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_AND_CLIENT_3 = {
  _style:
    'edgeStyle=none;endArrow=blockThin;verticalAlign=top;labelBackgroundColor=none;endSize=6;html=1;rounded=0;targetPerimeterSpacing=10;sourcePerimeterSpacing=30;endFill=1;strokeColor=#475E75;',
  _width: 2,
  _height: 115,
}

export function UserAndClient3(props: DiagramNodeProps) {
  return <Shape {...USER_AND_CLIENT_3} {...props} />
}
