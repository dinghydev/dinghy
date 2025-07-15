import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BATCH_ACCOUNTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Batch_Accounts.svg;',
  _width: 50,
  _height: 48,
}

export function BatchAccounts(props: DiagramNodeProps) {
  return <Shape {...BATCH_ACCOUNTS} {...props} />
}
