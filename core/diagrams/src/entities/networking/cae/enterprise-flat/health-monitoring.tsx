import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEALTH_MONITORING = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.health_monitoring',
  },
  _original_width: 50,
  _original_height: 42,
}

export function HealthMonitoring(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HEALTH_MONITORING)} />
}
