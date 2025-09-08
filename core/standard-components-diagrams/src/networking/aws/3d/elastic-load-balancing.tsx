import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELASTIC_LOAD_BALANCING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.elasticLoadBalancing;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _original_width: 92,
  _original_height: 88.17,
}

export function ElasticLoadBalancing(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_LOAD_BALANCING}
      {...props}
      _style={extendStyle(ELASTIC_LOAD_BALANCING, props)}
    />
  )
}
