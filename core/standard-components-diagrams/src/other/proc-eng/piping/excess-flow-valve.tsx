import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXCESS_FLOW_VALVE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.excess_flow_valve2;',
  _width: 50,
  _height: 25,
}

export function ExcessFlowValve(props: DiagramNodeProps) {
  return <Shape {...EXCESS_FLOW_VALVE} {...props} />
}
