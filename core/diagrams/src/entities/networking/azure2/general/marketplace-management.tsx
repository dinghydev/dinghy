import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MARKETPLACE_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Marketplace_Management.svg;strokeColor=none;',
  },
  _original_width: 57.99999999999999,
  _original_height: 68,
}

export function MarketplaceManagement(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MARKETPLACE_MANAGEMENT)} />
  )
}
