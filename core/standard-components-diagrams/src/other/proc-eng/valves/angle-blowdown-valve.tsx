import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ANGLE_BLOWDOWN_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=angBlow',
  _width: 100,
  _height: 100,
}

export function AngleBlowdownValve(props: DiagramNodeProps) {
  return <Shape {...ANGLE_BLOWDOWN_VALVE} {...props} />
}
