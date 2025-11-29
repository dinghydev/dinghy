import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_STORE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user_store;',
  },
  _original_width: 50,
  _original_height: 55,
}

export function UserStore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USER_STORE)} />
}
