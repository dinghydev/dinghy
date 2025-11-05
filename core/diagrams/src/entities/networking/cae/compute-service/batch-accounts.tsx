import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BATCH_ACCOUNTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Batch_Accounts.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function BatchAccounts(props: NodeProps) {
  return (
    <Shape
      {...BATCH_ACCOUNTS}
      {...props}
      _style={extendStyle(BATCH_ACCOUNTS, props)}
    />
  )
}
