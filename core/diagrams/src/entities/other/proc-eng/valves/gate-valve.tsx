import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GATE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate',
  },
  _width: 100,
  _height: 60,
}

export function GateValve(props: NodeProps) {
  return (
    <Shape {...GATE_VALVE} {...props} _style={extendStyle(GATE_VALVE, props)} />
  )
}
