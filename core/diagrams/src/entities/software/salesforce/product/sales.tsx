import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SALES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sales;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Sales(props: NodeProps) {
  return <Shape {...SALES} {...props} _style={extendStyle(SALES, props)} />
}
