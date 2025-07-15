import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_NETWORK_INTERFACE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elastic_network_interface;fillColor=#F58534;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function ElasticNetworkInterface(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_NETWORK_INTERFACE} {...props} />
}
