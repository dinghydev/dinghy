import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_SERVICES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user_services;',
  _width: 59,
  _height: 59,
}

export function UserServices(props: DiagramNodeProps) {
  return <Shape {...USER_SERVICES} {...props} />
}
