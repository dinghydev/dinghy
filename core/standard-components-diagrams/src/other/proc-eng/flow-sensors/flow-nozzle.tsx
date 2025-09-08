import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOW_NOZZLE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.flow_nozzle;',
  },
  _original_width: 50,
  _original_height: 25,
}

export function FlowNozzle(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOW_NOZZLE}
      {...props}
      _style={extendStyle(FLOW_NOZZLE, props)}
    />
  )
}
