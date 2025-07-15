import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FINANCIAL_SERVICES_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.financial_services2;',
  _width: 60,
  _height: 60,
}

export function FinancialServices2(props: DiagramNodeProps) {
  return <Shape {...FINANCIAL_SERVICES_2} {...props} />
}
