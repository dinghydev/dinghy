import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SENDGRID_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/SendGrid_Accounts.svg;strokeColor=none;',
  },
  _original_width: 66.8,
  _original_height: 68,
}

export function SendgridAccounts(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SENDGRID_ACCOUNTS)} />
}
