import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_3_WAY_VALVE_MANUAL = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=threeWay;actuator=man',
  _width: 100,
  _height: 120,
}

export function Component3WayValveManual(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_3_WAY_VALVE_MANUAL} {...props} />
}
