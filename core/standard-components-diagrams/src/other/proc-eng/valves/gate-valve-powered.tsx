import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GATE_VALVE_POWERED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=powered',
  },
  _original_width: 0,
  _original_height: 100,
}

export function GateValvePowered(props: DiagramNodeProps) {
  return (
    <Shape
      {...GATE_VALVE_POWERED}
      {...props}
      _style={extendStyle(GATE_VALVE_POWERED, props)}
    />
  )
}
