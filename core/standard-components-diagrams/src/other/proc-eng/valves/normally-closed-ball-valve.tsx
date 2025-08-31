import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NORMALLY_CLOSED_BALL_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=ball;defState=closed',
  _width: 100,
  _height: 60,
}

export function NormallyClosedBallValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...NORMALLY_CLOSED_BALL_VALVE}
      {...props}
      _style={extendStyle(NORMALLY_CLOSED_BALL_VALVE, props)}
    />
  )
}
