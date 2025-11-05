import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROLE_APPCONTROLLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_appcontroller;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function RoleAppcontroller(props: NodeProps) {
  return (
    <Shape
      {...ROLE_APPCONTROLLER}
      {...props}
      _style={extendStyle(ROLE_APPCONTROLLER, props)}
    />
  )
}
