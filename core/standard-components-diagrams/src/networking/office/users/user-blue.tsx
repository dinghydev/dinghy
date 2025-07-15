import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user;fillColor=#2072B8;',
  _width: 46,
  _height: 50,
}

export function UserBlue(props: DiagramNodeProps) {
  return <Shape {...USER_BLUE} {...props} />
}
