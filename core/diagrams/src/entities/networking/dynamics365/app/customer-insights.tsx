import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CUSTOMER_INSIGHTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CustomerInsights.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CustomerInsights(props: NodeProps) {
  return (
    <Shape
      {...CUSTOMER_INSIGHTS}
      {...props}
      _style={extendStyle(CUSTOMER_INSIGHTS, props)}
    />
  )
}
