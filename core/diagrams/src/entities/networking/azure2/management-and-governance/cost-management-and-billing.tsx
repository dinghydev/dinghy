import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COST_MANAGEMENT_AND_BILLING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Cost_Management_and_Billing.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CostManagementAndBilling(props: NodeProps) {
  return (
    <Shape
      {...COST_MANAGEMENT_AND_BILLING}
      {...props}
      _style={extendStyle(COST_MANAGEMENT_AND_BILLING, props)}
    />
  )
}
