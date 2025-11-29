import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CUSTOMER_SERVICE_INSIGHTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CustomerServiceInsights.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CustomerServiceInsights(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CUSTOMER_SERVICE_INSIGHTS)} />
  )
}
