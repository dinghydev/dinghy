import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GATE_VALVE_POWERED = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=powered',
  _width: 0,
  _height: 100,
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
