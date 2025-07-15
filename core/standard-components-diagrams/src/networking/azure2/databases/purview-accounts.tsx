import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PURVIEW_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Purview_Accounts.svg;',
  _width: 68,
  _height: 42,
}

export function PurviewAccounts(props: DiagramNodeProps) {
  return <Shape {...PURVIEW_ACCOUNTS} {...props} />
}
