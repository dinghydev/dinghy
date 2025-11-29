import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GATE_VALVE_POWERED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=powered',
  },
  _width: 0,
  _height: 100,
}

export function GateValvePowered(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GATE_VALVE_POWERED)} />
}
