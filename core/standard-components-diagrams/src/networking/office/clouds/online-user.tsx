import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ONLINE_USER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.online_user;',
  _width: 93,
  _height: 74,
}

export function OnlineUser(props: DiagramNodeProps) {
  return <Shape {...ONLINE_USER} {...props} />
}
