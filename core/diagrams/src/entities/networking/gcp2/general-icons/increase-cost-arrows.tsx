import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INCREASE_COST_ARROWS = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.increase_cost_arrows',
  },
  _original_width: 100,
  _original_height: 92,
}

export function IncreaseCostArrows(props: NodeProps) {
  return (
    <Shape
      {...INCREASE_COST_ARROWS}
      {...props}
      _style={extendStyle(INCREASE_COST_ARROWS, props)}
    />
  )
}
