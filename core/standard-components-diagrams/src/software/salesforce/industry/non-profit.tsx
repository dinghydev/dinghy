import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NON_PROFIT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.non_profit;',
  },
  _width: 60,
  _height: 55.800000000000004,
}

export function NonProfit(props: DiagramNodeProps) {
  return (
    <Shape {...NON_PROFIT} {...props} _style={extendStyle(NON_PROFIT, props)} />
  )
}
