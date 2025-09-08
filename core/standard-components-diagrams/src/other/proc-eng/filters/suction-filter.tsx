import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SUCTION_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.suction_filter;',
  },
  _original_width: 50,
  _original_height: 100,
}

export function SuctionFilter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUCTION_FILTER}
      {...props}
      _style={extendStyle(SUCTION_FILTER, props)}
    />
  )
}
