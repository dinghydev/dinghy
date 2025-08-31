import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AGENTLESS_COLLECTOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.application_discovery_service_aws_agentless_collector;',
  },
  _width: 60,
  _height: 60,
}

export function AgentlessCollector(props: DiagramNodeProps) {
  return (
    <Shape
      {...AGENTLESS_COLLECTOR}
      {...props}
      _style={extendStyle(AGENTLESS_COLLECTOR, props)}
    />
  )
}
