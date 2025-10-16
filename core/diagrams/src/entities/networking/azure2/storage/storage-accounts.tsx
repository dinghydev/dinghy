import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Storage_Accounts.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function StorageAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_ACCOUNTS}
      {...props}
      _style={extendStyle(STORAGE_ACCOUNTS, props)}
    />
  )
}
