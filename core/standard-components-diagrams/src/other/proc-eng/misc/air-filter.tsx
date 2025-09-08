import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AIR_FILTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.air_filter;',
  },
  _original_width: 40,
  _original_height: 65,
}

export function AirFilter(props: DiagramNodeProps) {
  return (
    <Shape {...AIR_FILTER} {...props} _style={extendStyle(AIR_FILTER, props)} />
  )
}
