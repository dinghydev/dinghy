import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COST_MANAGEMENT_AND_BILLING = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/migrate/Cost_Management_and_Billing.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function CostManagementAndBilling(props: DiagramNodeProps) {
  return (
    <Shape
      {...COST_MANAGEMENT_AND_BILLING}
      {...props}
      _style={extendStyle(COST_MANAGEMENT_AND_BILLING, props)}
    />
  )
}
