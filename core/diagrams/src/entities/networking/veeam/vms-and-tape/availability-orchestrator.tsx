import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AVAILABILITY_ORCHESTRATOR = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.availability_orchestrator;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function AvailabilityOrchestrator(props: DiagramNodeProps) {
  return (
    <Shape
      {...AVAILABILITY_ORCHESTRATOR}
      {...props}
      _style={extendStyle(AVAILABILITY_ORCHESTRATOR, props)}
    />
  )
}
