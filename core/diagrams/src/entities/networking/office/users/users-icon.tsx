import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USERS_ICON = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.users;',
  },
  _original_width: 46,
  _original_height: 50,
}

export function UsersIcon(props: DiagramNodeProps) {
  return (
    <Shape {...USERS_ICON} {...props} _style={extendStyle(USERS_ICON, props)} />
  )
}
