import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GATE_VALVE_MANUAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=man',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveManual(props: DiagramNodeProps) {
  return (
    <Shape
      {...GATE_VALVE_MANUAL}
      {...props}
      _style={extendStyle(GATE_VALVE_MANUAL, props)}
    />
  )
}
