import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SENDGRID_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/SendGrid_Accounts.svg;strokeColor=none;',
  _width: 66.8,
  _height: 68,
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
