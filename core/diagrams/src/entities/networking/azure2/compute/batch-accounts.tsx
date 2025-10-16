import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BATCH_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Batch_Accounts.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
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
