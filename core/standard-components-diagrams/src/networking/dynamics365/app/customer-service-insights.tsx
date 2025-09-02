import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CUSTOMER_SERVICE_INSIGHTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CustomerServiceInsights.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CustomerServiceInsights(props: DiagramNodeProps) {
  return (
    <Shape
      {...CUSTOMER_SERVICE_INSIGHTS}
      {...props}
      _style={extendStyle(CUSTOMER_SERVICE_INSIGHTS, props)}
    />
  )
}
