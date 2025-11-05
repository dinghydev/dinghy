import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CUSTOMER_360_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.customer_3602;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Customer3602(props: NodeProps) {
  return (
    <Shape
      {...CUSTOMER_360_2}
      {...props}
      _style={extendStyle(CUSTOMER_360_2, props)}
    />
  )
}
