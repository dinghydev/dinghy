import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_DISCOVERY_SERVICE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.application_discovery_service;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function ApplicationDiscoveryService(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_DISCOVERY_SERVICE}
      {...props}
      _style={extendStyle(APPLICATION_DISCOVERY_SERVICE, props)}
    />
  )
}
