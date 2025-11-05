import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GATE_VALVE_SINGLE_ACTING_CYLINDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=singActing',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GateValveSingleActingCylinder(props: NodeProps) {
  return (
    <Shape
      {...GATE_VALVE_SINGLE_ACTING_CYLINDER}
      {...props}
      _style={extendStyle(GATE_VALVE_SINGLE_ACTING_CYLINDER, props)}
    />
  )
}
