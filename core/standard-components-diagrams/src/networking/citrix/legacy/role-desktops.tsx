import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLE_DESKTOPS = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_desktops;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  _width: 38,
  _height: 38,
}

export function RoleDesktops(props: DiagramNodeProps) {
  return <Shape {...ROLE_DESKTOPS} {...props} />
}
