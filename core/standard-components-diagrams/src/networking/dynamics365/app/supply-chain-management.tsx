import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPPLY_CHAIN_MANAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/SupplyChainManagement.svg;strokeColor=none;',
  _width: 68,
  _height: 59.519999999999996,
}

export function SupplyChainManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPPLY_CHAIN_MANAGEMENT}
      {...props}
      _style={extendStyle(SUPPLY_CHAIN_MANAGEMENT, props)}
    />
  )
}
