import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GATE_VALVE_ELECTRO_HYDRAULIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=elHyd',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveElectroHydraulic(props: DiagramNodeProps) {
  return (
    <Shape
      {...GATE_VALVE_ELECTRO_HYDRAULIC}
      {...props}
      _style={extendStyle(GATE_VALVE_ELECTRO_HYDRAULIC, props)}
    />
  )
}
