import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GATE_VALVE_DOUBLE_ACTING_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=dblActing',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveDoubleActingCylinder(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, GATE_VALVE_DOUBLE_ACTING_CYLINDER)}
    />
  )
}
