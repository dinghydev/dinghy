import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MARKETPLACE_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Marketplace_Management.svg;strokeColor=none;',
  },
  _original_width: 57.99999999999999,
  _original_height: 68,
}

export function MarketplaceManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...MARKETPLACE_MANAGEMENT}
      {...props}
      _style={extendStyle(MARKETPLACE_MANAGEMENT, props)}
    />
  )
}
