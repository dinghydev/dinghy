import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SALES_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sales2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Sales2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SALES_2)} />
}
