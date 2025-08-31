import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COST_ARROWS = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cost_arrows',
  },
  _width: 76,
  _height: 100,
}

export function CostArrows(props: DiagramNodeProps) {
  return (
    <Shape
      {...COST_ARROWS}
      {...props}
      _style={extendStyle(COST_ARROWS, props)}
    />
  )
}
