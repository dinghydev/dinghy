import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIR_FILTER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.air_filter;',
  _width: 40,
  _height: 65,
}

export function AirFilter(props: DiagramNodeProps) {
  return (
    <Shape {...AIR_FILTER} {...props} _style={extendStyle(AIR_FILTER, props)} />
  )
}
