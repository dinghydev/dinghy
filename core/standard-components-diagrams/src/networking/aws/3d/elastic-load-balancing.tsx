import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_LOAD_BALANCING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.elasticLoadBalancing;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 92,
  _height: 88.17,
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
