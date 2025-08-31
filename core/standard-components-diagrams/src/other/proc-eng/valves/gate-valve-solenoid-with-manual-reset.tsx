import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GATE_VALVE_SOLENOID_WITH_MANUAL_RESET = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=solenoidManRes',
  _width: 60,
  _height: 60,
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
