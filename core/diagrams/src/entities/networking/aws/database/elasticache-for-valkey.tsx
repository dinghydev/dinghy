import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELASTICACHE_FOR_VALKEY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elasticache_for_valkey;',
  },
  _original_width: 78,
  _original_height: 69,
}

export function ElasticacheForValkey(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, ELASTICACHE_FOR_VALKEY)} />
  )
}
