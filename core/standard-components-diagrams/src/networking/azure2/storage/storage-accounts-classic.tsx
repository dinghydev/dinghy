import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE_ACCOUNTS_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Storage_Accounts_Classic.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
}

export function StorageAccountsClassic(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_ACCOUNTS_CLASSIC}
      {...props}
      _style={extendStyle(STORAGE_ACCOUNTS_CLASSIC, props)}
    />
  )
}
