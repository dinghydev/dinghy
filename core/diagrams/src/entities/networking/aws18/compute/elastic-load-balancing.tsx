import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELASTIC_LOAD_BALANCING = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.elastic_load_balancing;',
  },
  _width: 80,
  _height: 110,
}

export function ElasticLoadBalancing(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, ELASTIC_LOAD_BALANCING)} />
  )
}
