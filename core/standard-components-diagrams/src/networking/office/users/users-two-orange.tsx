import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USERS_TWO_ORANGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.users_two;fillColor=#DA4026;',
  _width: 57,
  _height: 43,
}

export function UsersTwoOrange(props: DiagramNodeProps) {
  return <Shape {...USERS_TWO_ORANGE} {...props} />
}
