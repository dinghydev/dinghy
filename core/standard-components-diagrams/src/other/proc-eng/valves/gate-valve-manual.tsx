import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GATE_VALVE_MANUAL = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=man',
  _width: 100,
  _height: 100,
}

export function GateValveManual(props: DiagramNodeProps) {
  return <Shape {...GATE_VALVE_MANUAL} {...props} />
}
