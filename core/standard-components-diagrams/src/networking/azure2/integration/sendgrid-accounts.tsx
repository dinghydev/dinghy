import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SENDGRID_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/SendGrid_Accounts.svg;',
  _width: 66.8,
  _height: 68,
}

export function SendgridAccounts(props: DiagramNodeProps) {
  return <Shape {...SENDGRID_ACCOUNTS} {...props} />
}
