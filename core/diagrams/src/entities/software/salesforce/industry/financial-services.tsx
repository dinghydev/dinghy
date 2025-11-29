import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FINANCIAL_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.financial_services;',
  },
  _original_width: 57.599999999999994,
  _original_height: 60,
}

export function FinancialServices(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FINANCIAL_SERVICES)} />
}
