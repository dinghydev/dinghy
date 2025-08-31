import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTEGRATION_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Integration_Accounts.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function IntegrationAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTEGRATION_ACCOUNTS}
      {...props}
      _style={extendStyle(INTEGRATION_ACCOUNTS, props)}
    />
  )
}
