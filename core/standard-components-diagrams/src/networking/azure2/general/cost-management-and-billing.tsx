import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COST_MANAGEMENT_AND_BILLING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cost_Management_and_Billing.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function CostManagementAndBilling(props: DiagramNodeProps) {
  return <Shape {...COST_MANAGEMENT_AND_BILLING} {...props} />
}
