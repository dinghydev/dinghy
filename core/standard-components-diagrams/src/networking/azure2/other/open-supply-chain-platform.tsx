import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPEN_SUPPLY_CHAIN_PLATFORM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Open_Supply_Chain_Platform.svg;',
  _width: 68,
  _height: 68,
}

export function OpenSupplyChainPlatform(props: DiagramNodeProps) {
  return <Shape {...OPEN_SUPPLY_CHAIN_PLATFORM} {...props} />
}
