import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GATE_VALVE_ELECTRO_HYDRAULIC = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=elHyd',
  _width: 100,
  _height: 100,
}

export function GateValveElectroHydraulic(props: DiagramNodeProps) {
  return <Shape {...GATE_VALVE_ELECTRO_HYDRAULIC} {...props} />
}
