import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SENDGRID_ACCOUNTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SendGrid_Accounts.svg;',
  _width: 50,
  _height: 50,
}

export function SendgridAccounts(props: DiagramNodeProps) {
  return <Shape {...SENDGRID_ACCOUNTS} {...props} />
}
