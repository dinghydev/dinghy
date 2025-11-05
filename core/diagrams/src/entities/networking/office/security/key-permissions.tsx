import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEY_PERMISSIONS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.key_permissions;',
  },
  _width: 25,
  _height: 53,
}

export function KeyPermissions(props: NodeProps) {
  return (
    <Shape
      {...KEY_PERMISSIONS}
      {...props}
      _style={extendStyle(KEY_PERMISSIONS, props)}
    />
  )
}
