import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORAGE_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Storage_Accounts.svg;',
  _width: 65,
  _height: 52,
}

export function StorageAccounts(props: DiagramNodeProps) {
  return <Shape {...STORAGE_ACCOUNTS} {...props} />
}
