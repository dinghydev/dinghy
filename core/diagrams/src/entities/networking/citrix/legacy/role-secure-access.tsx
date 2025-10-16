import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ROLE_SECURE_ACCESS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.role_secure_access;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function RoleSecureAccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLE_SECURE_ACCESS}
      {...props}
      _style={extendStyle(ROLE_SECURE_ACCESS, props)}
    />
  )
}
