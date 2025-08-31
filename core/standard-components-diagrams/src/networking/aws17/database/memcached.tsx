import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEMCACHED = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.memcached;fillColor=#2E73B8;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function Memcached(props: DiagramNodeProps) {
  return (
    <Shape {...MEMCACHED} {...props} _style={extendStyle(MEMCACHED, props)} />
  )
}
