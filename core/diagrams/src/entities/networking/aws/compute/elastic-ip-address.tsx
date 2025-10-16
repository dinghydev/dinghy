import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELASTIC_IP_ADDRESS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elastic_ip_address;',
  },
  _width: 48,
  _height: 20,
}

export function ElasticIpAddress(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_IP_ADDRESS}
      {...props}
      _style={extendStyle(ELASTIC_IP_ADDRESS, props)}
    />
  )
}
