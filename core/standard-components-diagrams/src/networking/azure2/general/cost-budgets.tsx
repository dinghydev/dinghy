import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COST_BUDGETS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cost_Budgets.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 68,
}

export function CostBudgets(props: DiagramNodeProps) {
  return (
    <Shape
      {...COST_BUDGETS}
      {...props}
      _style={extendStyle(COST_BUDGETS, props)}
    />
  )
}
