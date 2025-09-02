import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MARKETPLACE_SHOPPING_BAG = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.marketplace_shopping_bag;',
  },
  _original_width: 36,
  _original_height: 46,
}

export function MarketplaceShoppingBag(props: DiagramNodeProps) {
  return (
    <Shape
      {...MARKETPLACE_SHOPPING_BAG}
      {...props}
      _style={extendStyle(MARKETPLACE_SHOPPING_BAG, props)}
    />
  )
}
