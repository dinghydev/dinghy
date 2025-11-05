import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXCHANGE_ACCESS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Exchange_Access.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function ExchangeAccess(props: NodeProps) {
  return (
    <Shape
      {...EXCHANGE_ACCESS}
      {...props}
      _style={extendStyle(EXCHANGE_ACCESS, props)}
    />
  )
}
