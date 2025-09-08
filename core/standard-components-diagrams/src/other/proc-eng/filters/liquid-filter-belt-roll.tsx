import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER_BELT_ROLL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter_(belt,_roll);',
  },
  _original_width: 50,
  _original_height: 100,
}

export function LiquidFilterBeltRoll(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER_BELT_ROLL}
      {...props}
      _style={extendStyle(LIQUID_FILTER_BELT_ROLL, props)}
    />
  )
}
