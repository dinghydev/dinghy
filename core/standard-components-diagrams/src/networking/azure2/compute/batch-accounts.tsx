import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BATCH_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Batch_Accounts.svg;strokeColor=none;',
  _width: 68,
  _height: 64,
}

export function BatchAccounts(props: DiagramNodeProps) {
  return <Shape {...BATCH_ACCOUNTS} {...props} />
}
