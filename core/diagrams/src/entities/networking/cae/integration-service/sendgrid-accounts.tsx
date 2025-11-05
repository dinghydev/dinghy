import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SENDGRID_ACCOUNTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SendGrid_Accounts.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SendgridAccounts(props: NodeProps) {
  return (
    <Shape
      {...SENDGRID_ACCOUNTS}
      {...props}
      _style={extendStyle(SENDGRID_ACCOUNTS, props)}
    />
  )
}
