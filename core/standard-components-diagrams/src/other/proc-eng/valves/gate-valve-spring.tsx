import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GATE_VALVE_SPRING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=spring',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveSpring(props: DiagramNodeProps) {
  return (
    <Shape
      {...GATE_VALVE_SPRING}
      {...props}
      _style={extendStyle(GATE_VALVE_SPRING, props)}
    />
  )
}
