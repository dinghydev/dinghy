import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FINANCIAL_SERVICES_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.financial_services2;',
  },
  _width: 60,
  _height: 60,
}

export function FinancialServices2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FINANCIAL_SERVICES_2}
      {...props}
      _style={extendStyle(FINANCIAL_SERVICES_2, props)}
    />
  )
}
