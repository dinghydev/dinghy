import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NON_PROFIT_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.non_profit2;',
  _width: 60,
  _height: 60,
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
