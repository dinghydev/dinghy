import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLE_DESKTOPS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_desktops;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function RoleDesktops(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLE_DESKTOPS}
      {...props}
      _style={extendStyle(ROLE_DESKTOPS, props)}
    />
  )
}
