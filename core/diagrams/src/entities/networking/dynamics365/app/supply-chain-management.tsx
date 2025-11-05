import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUPPLY_CHAIN_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/SupplyChainManagement.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 59.519999999999996,
}

export function SupplyChainManagement(props: NodeProps) {
  return (
    <Shape
      {...SUPPLY_CHAIN_MANAGEMENT}
      {...props}
      _style={extendStyle(SUPPLY_CHAIN_MANAGEMENT, props)}
    />
  )
}
