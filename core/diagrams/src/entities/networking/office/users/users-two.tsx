import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USERS_TWO = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.users_two;',
  },
  _original_width: 57,
  _original_height: 43,
}

export function UsersTwo(props: NodeProps) {
  return (
    <Shape {...USERS_TWO} {...props} _style={extendStyle(USERS_TWO, props)} />
  )
}
