import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SENDGRID_ACCOUNTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SendGrid_Accounts.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function SendgridAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...SENDGRID_ACCOUNTS}
      {...props}
      _style={extendStyle(SENDGRID_ACCOUNTS, props)}
    />
  )
}
