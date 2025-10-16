import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GATE_VALVE_SOLENOID_WITH_MANUAL_RESET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=solenoidManRes',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveSolenoidWithManualReset(props: DiagramNodeProps) {
  return (
    <Shape
      {...GATE_VALVE_SOLENOID_WITH_MANUAL_RESET}
      {...props}
      _style={extendStyle(GATE_VALVE_SOLENOID_WITH_MANUAL_RESET, props)}
    />
  )
}
