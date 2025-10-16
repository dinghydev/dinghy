import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISCOVERY_AGENT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.application_discovery_service_aws_discovery_agent;',
  },
  _original_width: 78,
  _original_height: 63,
}

export function DiscoveryAgent(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCOVERY_AGENT}
      {...props}
      _style={extendStyle(DISCOVERY_AGENT, props)}
    />
  )
}
