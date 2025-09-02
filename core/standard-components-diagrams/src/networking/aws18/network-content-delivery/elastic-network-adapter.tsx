import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_NETWORK_ADAPTER = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.elastic_network_adapter;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ElasticNetworkAdapter(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_NETWORK_ADAPTER}
      {...props}
      _style={extendStyle(ELASTIC_NETWORK_ADAPTER, props)}
    />
  )
}
