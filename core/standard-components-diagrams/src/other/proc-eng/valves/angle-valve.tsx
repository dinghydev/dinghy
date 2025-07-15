import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANGLE_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=angle;actuator=none',
  _width: 100,
  _height: 80,
}

export function AngleValve(props: DiagramNodeProps) {
  return <Shape {...ANGLE_VALVE} {...props} />
}
