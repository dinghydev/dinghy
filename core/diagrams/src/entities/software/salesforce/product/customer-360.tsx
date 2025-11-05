import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CUSTOMER_360 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.customer_360;',
  },
  _original_width: 60,
  _original_height: 54.6,
}

export function Customer360(props: NodeProps) {
  return (
    <Shape
      {...CUSTOMER_360}
      {...props}
      _style={extendStyle(CUSTOMER_360, props)}
    />
  )
}
