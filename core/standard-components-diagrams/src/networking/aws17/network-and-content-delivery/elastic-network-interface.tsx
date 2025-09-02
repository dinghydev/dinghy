import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_NETWORK_INTERFACE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elastic_network_interface;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
}

export function ElasticNetworkInterface(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_NETWORK_INTERFACE}
      {...props}
      _style={extendStyle(ELASTIC_NETWORK_INTERFACE, props)}
    />
  )
}
