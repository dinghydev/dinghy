import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELASTIC_LOAD_BALANCING = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elastic_load_balancing;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function ElasticLoadBalancing(props: NodeProps) {
  return (
    <Shape
      {...ELASTIC_LOAD_BALANCING}
      {...props}
      _style={extendStyle(ELASTIC_LOAD_BALANCING, props)}
    />
  )
}
