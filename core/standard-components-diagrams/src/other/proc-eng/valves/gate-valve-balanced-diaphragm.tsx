import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GATE_VALVE_BALANCED_DIAPHRAGM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=balDiaph',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveBalancedDiaphragm(props: DiagramNodeProps) {
  return (
    <Shape
      {...GATE_VALVE_BALANCED_DIAPHRAGM}
      {...props}
      _style={extendStyle(GATE_VALVE_BALANCED_DIAPHRAGM, props)}
    />
  )
}
