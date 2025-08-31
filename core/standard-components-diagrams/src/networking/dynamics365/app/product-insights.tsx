import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRODUCT_INSIGHTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Product_Insights.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 59.519999999999996,
}

export function ProductInsights(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRODUCT_INSIGHTS}
      {...props}
      _style={extendStyle(PRODUCT_INSIGHTS, props)}
    />
  )
}
