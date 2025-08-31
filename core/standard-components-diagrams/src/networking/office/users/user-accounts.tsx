import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const USER_ACCOUNTS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.user_accounts;',
  },
  _width: 60,
  _height: 60,
}

export function UserAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...USER_ACCOUNTS}
      {...props}
      _style={extendStyle(USER_ACCOUNTS, props)}
    />
  )
}
