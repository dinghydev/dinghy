import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_ACCOUNTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Storage_Accounts.svg;',
  _width: 50,
  _height: 45,
}

export function StorageAccounts(props: DiagramNodeProps) {
  return <Shape {...STORAGE_ACCOUNTS} {...props} />
}
