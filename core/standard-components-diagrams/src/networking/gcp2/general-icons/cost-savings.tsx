import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COST_SAVINGS = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cost_savings',
  },
  _width: 66,
  _height: 100,
}

export function CostSavings(props: DiagramNodeProps) {
  return (
    <Shape
      {...COST_SAVINGS}
      {...props}
      _style={extendStyle(COST_SAVINGS, props)}
    />
  )
}
