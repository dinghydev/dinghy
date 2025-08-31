import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOMER_INSIGHTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CustomerInsights.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CustomerInsights(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_INSIGHTS}
      {...props}
      _style={extendStyle(CUSTOMER_INSIGHTS, props)}
    />
  )
}
