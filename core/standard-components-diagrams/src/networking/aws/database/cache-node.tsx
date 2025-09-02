import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CACHE_NODE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cache_node;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function CacheNode(props: DiagramNodeProps) {
  return (
    <Shape {...CACHE_NODE} {...props} _style={extendStyle(CACHE_NODE, props)} />
  )
}
