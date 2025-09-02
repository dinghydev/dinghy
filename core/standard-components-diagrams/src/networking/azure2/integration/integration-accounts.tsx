import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTEGRATION_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Integration_Accounts.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
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
