import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_SUPPLY_CHAIN_PLATFORM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Open_Supply_Chain_Platform.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function OpenSupplyChainPlatform(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPEN_SUPPLY_CHAIN_PLATFORM}
      {...props}
      _style={extendStyle(OPEN_SUPPLY_CHAIN_PLATFORM, props)}
    />
  )
}
