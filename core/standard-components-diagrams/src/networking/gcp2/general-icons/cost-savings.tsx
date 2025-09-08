import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COST_SAVINGS = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cost_savings',
  },
  _original_width: 66,
  _original_height: 100,
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
