import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/user_accounts.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48.5,
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
