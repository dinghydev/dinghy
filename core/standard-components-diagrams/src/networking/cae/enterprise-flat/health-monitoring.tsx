import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEALTH_MONITORING = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.health_monitoring',
  },
  _width: 50,
  _height: 42,
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
