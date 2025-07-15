import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NON_PROFIT = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.non_profit;',
  _width: 60,
  _height: 55.800000000000004,
}

export function NonProfit(props: DiagramNodeProps) {
  return <Shape {...NON_PROFIT} {...props} />
}
