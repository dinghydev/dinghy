import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NON_PROFIT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.non_profit;',
  },
  _original_width: 60,
  _original_height: 55.800000000000004,
}

export function NonProfit(props: NodeProps) {
  return (
    <Shape {...NON_PROFIT} {...props} _style={extendStyle(NON_PROFIT, props)} />
  )
}
