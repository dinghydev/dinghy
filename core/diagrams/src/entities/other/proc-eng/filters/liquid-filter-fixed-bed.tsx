import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER_FIXED_BED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter_(fixed_bed);',
  },
  _width: 50,
  _height: 100,
}

export function LiquidFilterFixedBed(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, LIQUID_FILTER_FIXED_BED)} />
  )
}
