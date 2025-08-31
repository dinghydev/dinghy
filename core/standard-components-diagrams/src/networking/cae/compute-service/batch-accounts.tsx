import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATCH_ACCOUNTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Batch_Accounts.svg;strokeColor=none;',
  _width: 50,
  _height: 48,
}

export function BatchAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...BATCH_ACCOUNTS}
      {...props}
      _style={extendStyle(BATCH_ACCOUNTS, props)}
    />
  )
}
