import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_NETWORK_ADAPTER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elastic_network_adapter;fillColor=#F58534;gradientColor=none;',
  _width: 75,
  _height: 90,
}

export function ElasticNetworkAdapter(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_NETWORK_ADAPTER} {...props} />
}
