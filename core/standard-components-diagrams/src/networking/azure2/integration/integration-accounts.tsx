import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATION_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Integration_Accounts.svg;',
  _width: 64,
  _height: 64,
}

export function IntegrationAccounts(props: DiagramNodeProps) {
  return <Shape {...INTEGRATION_ACCOUNTS} {...props} />
}
