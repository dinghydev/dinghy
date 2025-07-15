import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const USER_GROUP = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.group;',
  _width: 53.6,
  _height: 60.4,
}

export function UserGroup(props: DiagramNodeProps) {
  return <Shape {...USER_GROUP} {...props} />
}
