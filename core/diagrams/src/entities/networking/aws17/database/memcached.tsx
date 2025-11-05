import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MEMCACHED = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.memcached;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function Memcached(props: NodeProps) {
  return (
    <Shape {...MEMCACHED} {...props} _style={extendStyle(MEMCACHED, props)} />
  )
}
