import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEALTH_MONITORING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.health_monitoring;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function HealthMonitoring(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEALTH_MONITORING}
      {...props}
      _style={extendStyle(HEALTH_MONITORING, props)}
    />
  )
}
