import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NON_PROFIT_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.non_profit2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function NonProfit2(props: DiagramNodeProps) {
  return (
    <Shape
      {...NON_PROFIT_2}
      {...props}
      _style={extendStyle(NON_PROFIT_2, props)}
    />
  )
}
