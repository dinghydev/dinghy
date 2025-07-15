import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEEDLE_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=needle',
  _width: 100,
  _height: 60,
}

export function NeedleValve(props: DiagramNodeProps) {
  return <Shape {...NEEDLE_VALVE} {...props} />
}
