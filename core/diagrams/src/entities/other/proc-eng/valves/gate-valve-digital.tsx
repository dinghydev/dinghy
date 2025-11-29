import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GATE_VALVE_DIGITAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=digital',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveDigital(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GATE_VALVE_DIGITAL)} />
}
