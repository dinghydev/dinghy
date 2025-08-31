import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INCREASE_COST_ARROWS = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.increase_cost_arrows',
  },
  _width: 100,
  _height: 92,
}

export function IncreaseCostArrows(props: DiagramNodeProps) {
  return (
    <Shape
      {...INCREASE_COST_ARROWS}
      {...props}
      _style={extendStyle(INCREASE_COST_ARROWS, props)}
    />
  )
}
