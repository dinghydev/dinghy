import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USERS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.users;fillColor=#D2D3D3;gradientColor=none;',
  _width: 66,
  _height: 63,
}

export function Users(props: DiagramNodeProps) {
  return <Shape {...USERS} {...props} />
}
