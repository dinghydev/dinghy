import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USERS_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.users;fillColor=#7FBA42;',
  },
  _original_width: 46,
  _original_height: 50,
}

export function UsersGreen(props: NodeProps) {
  return (
    <Shape
      {...USERS_GREEN}
      {...props}
      _style={extendStyle(USERS_GREEN, props)}
    />
  )
}
