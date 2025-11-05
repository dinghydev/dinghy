import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USER_ACCOUNTS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user_accounts;',
  },
  _original_width: 59,
  _original_height: 59,
}

export function UserAccounts(props: NodeProps) {
  return (
    <Shape
      {...USER_ACCOUNTS}
      {...props}
      _style={extendStyle(USER_ACCOUNTS, props)}
    />
  )
}
