import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FINANCIAL_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.financial_services;',
  },
  _width: 57.599999999999994,
  _height: 60,
}

export function FinancialServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...FINANCIAL_SERVICES}
      {...props}
      _style={extendStyle(FINANCIAL_SERVICES, props)}
    />
  )
}
