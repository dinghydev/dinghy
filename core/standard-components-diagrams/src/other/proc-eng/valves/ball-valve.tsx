import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BALL_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=ball',
  },
  _width: 100,
  _height: 60,
}

export function BallValve(props: DiagramNodeProps) {
  return (
    <Shape {...BALL_VALVE} {...props} _style={extendStyle(BALL_VALVE, props)} />
  )
}
