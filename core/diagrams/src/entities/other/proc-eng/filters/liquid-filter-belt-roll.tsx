import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER_BELT_ROLL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter_(belt,_roll);',
  },
  _width: 50,
  _height: 100,
}

export function LiquidFilterBeltRoll(props: NodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER_BELT_ROLL}
      {...props}
      _style={extendStyle(LIQUID_FILTER_BELT_ROLL, props)}
    />
  )
}
