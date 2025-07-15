import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_LOAD_BALANCING = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elastic_load_balancing;fillColor=#F58536;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function ElasticLoadBalancing(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_LOAD_BALANCING} {...props} />
}
