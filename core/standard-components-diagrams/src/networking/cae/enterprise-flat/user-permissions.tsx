import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER_PERMISSIONS = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.enterprise.user_permissions;fillColor=#0078D7;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function UserPermissions(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_PERMISSIONS}
      {...props}
      _style={extendStyle(USER_PERMISSIONS, props)}
    />
  )
}
