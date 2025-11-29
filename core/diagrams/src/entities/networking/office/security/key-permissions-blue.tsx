import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KEY_PERMISSIONS_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.key_permissions;fillColor=#2072B8;',
  },
  _width: 25,
  _height: 53,
}

export function KeyPermissionsBlue(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KEY_PERMISSIONS_BLUE)} />
}
