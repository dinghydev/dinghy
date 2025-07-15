import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FLOW_NOZZLE = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.flow_nozzle;',
  _width: 50,
  _height: 25,
}

export function FlowNozzle(props: DiagramNodeProps) {
  return <Shape {...FLOW_NOZZLE} {...props} />
}
