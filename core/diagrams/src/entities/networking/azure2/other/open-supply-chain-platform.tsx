import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OPEN_SUPPLY_CHAIN_PLATFORM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Open_Supply_Chain_Platform.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function OpenSupplyChainPlatform(props: NodeProps) {
  return (
    <Shape
      {...OPEN_SUPPLY_CHAIN_PLATFORM}
      {...props}
      _style={extendStyle(OPEN_SUPPLY_CHAIN_PLATFORM, props)}
    />
  )
}
