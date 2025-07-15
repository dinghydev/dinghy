import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USERS = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.users;',
  _width: 64.5,
  _height: 55,
}

export function Users(props: DiagramNodeProps) {
  return <Shape {...USERS} {...props} />
}
