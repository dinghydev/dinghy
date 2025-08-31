import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BATCH_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/containers/Batch_Accounts.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 64,
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
