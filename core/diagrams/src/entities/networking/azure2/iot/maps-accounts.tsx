import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAPS_ACCOUNTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Azure_Maps_Accounts.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MapsAccounts(props: NodeProps) {
  return (
    <Shape
      {...MAPS_ACCOUNTS}
      {...props}
      _style={extendStyle(MAPS_ACCOUNTS, props)}
    />
  )
}
