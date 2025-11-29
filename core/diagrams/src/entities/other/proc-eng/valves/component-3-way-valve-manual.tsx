import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3_WAY_VALVE_MANUAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=threeWay;actuator=man',
  },
  _width: 100,
  _height: 120,
}

export function Component3WayValveManual(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, COMPONENT_3_WAY_VALVE_MANUAL)}
    />
  )
}
