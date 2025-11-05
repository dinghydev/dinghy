import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CACHE_NODE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cache_node;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function CacheNode(props: NodeProps) {
  return (
    <Shape {...CACHE_NODE} {...props} _style={extendStyle(CACHE_NODE, props)} />
  )
}
