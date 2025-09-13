import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PURVIEW_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/Azure_Purview_Accounts.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 42,
}

export function PurviewAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...PURVIEW_ACCOUNTS}
      {...props}
      _style={extendStyle(PURVIEW_ACCOUNTS, props)}
    />
  )
}
