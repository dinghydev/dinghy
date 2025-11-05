import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRODUCT_INSIGHTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Product_Insights.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 59.519999999999996,
}

export function ProductInsights(props: NodeProps) {
  return (
    <Shape
      {...PRODUCT_INSIGHTS}
      {...props}
      _style={extendStyle(PRODUCT_INSIGHTS, props)}
    />
  )
}
