import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRODUCT_INSIGHTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Product_Insights.svg;',
  _width: 68,
  _height: 59.519999999999996,
}

export function ProductInsights(props: DiagramNodeProps) {
  return <Shape {...PRODUCT_INSIGHTS} {...props} />
}
