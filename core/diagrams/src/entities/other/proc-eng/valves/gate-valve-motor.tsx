import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GATE_VALVE_MOTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=motor',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveMotor(props: NodeProps) {
  return (
    <Shape
      {...GATE_VALVE_MOTOR}
      {...props}
      _style={extendStyle(GATE_VALVE_MOTOR, props)}
    />
  )
}
