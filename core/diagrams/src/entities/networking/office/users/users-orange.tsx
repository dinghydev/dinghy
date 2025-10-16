import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USERS_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.users;fillColor=#DA4026;',
  },
  _original_width: 46,
  _original_height: 50,
}

export function UsersOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...USERS_ORANGE}
      {...props}
      _style={extendStyle(USERS_ORANGE, props)}
    />
  )
}
