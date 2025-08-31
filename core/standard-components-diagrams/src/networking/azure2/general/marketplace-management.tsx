import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARKETPLACE_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Marketplace_Management.svg;strokeColor=none;',
  },
  _width: 57.99999999999999,
  _height: 68,
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
