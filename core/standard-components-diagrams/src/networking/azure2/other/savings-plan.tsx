import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAVINGS_PLAN = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Savings_Plan.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SavingsPlan(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAVINGS_PLAN}
      {...props}
      _style={extendStyle(SAVINGS_PLAN, props)}
    />
  )
}
