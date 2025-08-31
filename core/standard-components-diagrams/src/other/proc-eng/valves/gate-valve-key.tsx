import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GATE_VALVE_KEY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=key',
  },
  _width: 60,
  _height: 60,
}

export function GateValveKey(props: DiagramNodeProps) {
  return (
    <Shape
      {...GATE_VALVE_KEY}
      {...props}
      _style={extendStyle(GATE_VALVE_KEY, props)}
    />
  )
}
