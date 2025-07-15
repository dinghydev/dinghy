import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BALL_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=ball',
  _width: 100,
  _height: 60,
}

export function BallValve(props: DiagramNodeProps) {
  return <Shape {...BALL_VALVE} {...props} />
}
