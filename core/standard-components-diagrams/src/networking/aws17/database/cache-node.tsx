import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CACHE_NODE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cache_node;fillColor=#2E73B8;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function CacheNode(props: DiagramNodeProps) {
  return <Shape {...CACHE_NODE} {...props} />
}
