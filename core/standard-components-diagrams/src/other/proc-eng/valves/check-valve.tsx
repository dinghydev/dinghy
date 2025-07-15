import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECK_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=check;',
  _width: 100,
  _height: 60,
}

export function CheckValve(props: DiagramNodeProps) {
  return <Shape {...CHECK_VALVE} {...props} />
}
