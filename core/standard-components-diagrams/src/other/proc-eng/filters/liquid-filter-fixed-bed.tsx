import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER_FIXED_BED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter_(fixed_bed);',
  },
  _original_width: 50,
  _original_height: 100,
}

export function LiquidFilterFixedBed(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER_FIXED_BED}
      {...props}
      _style={extendStyle(LIQUID_FILTER_FIXED_BED, props)}
    />
  )
}
