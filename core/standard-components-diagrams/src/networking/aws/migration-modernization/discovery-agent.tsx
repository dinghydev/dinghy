import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISCOVERY_AGENT = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.application_discovery_service_aws_discovery_agent;',
  _width: 78,
  _height: 63,
}

export function DiscoveryAgent(props: DiagramNodeProps) {
  return <Shape {...DISCOVERY_AGENT} {...props} />
}
