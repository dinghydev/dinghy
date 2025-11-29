import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FINANCIAL_SERVICES_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.financial_services2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function FinancialServices2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FINANCIAL_SERVICES_2)} />
}
