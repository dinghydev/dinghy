import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUPPLY_CHAIN_MANAGEMENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/SupplyChainManagement.svg;',
  _width: 68,
  _height: 59.519999999999996,
}

export function SupplyChainManagement(props: DiagramNodeProps) {
  return <Shape {...SUPPLY_CHAIN_MANAGEMENT} {...props} />
}
