import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COST_BUDGETS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cost_Budgets.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 68,
}

export function CostBudgets(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COST_BUDGETS)} />
}
