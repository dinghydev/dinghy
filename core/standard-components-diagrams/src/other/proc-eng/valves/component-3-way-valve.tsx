import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_3_WAY_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=threeWay;actuator=none',
  _width: 100,
  _height: 80,
}

export function Component3WayValve(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_3_WAY_VALVE} {...props} />
}
