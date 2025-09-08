import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIQUID_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.liquid_filter;',
  },
  _original_width: 50,
  _original_height: 100,
}

export function LiquidFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...LIQUID_FILTER}
      {...props}
      _style={extendStyle(LIQUID_FILTER, props)}
    />
  )
}
