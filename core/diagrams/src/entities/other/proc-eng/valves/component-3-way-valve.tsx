import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_3_WAY_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=threeWay;actuator=none',
  },
  _width: 100,
  _height: 80,
}

export function Component3WayValve(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMPONENT_3_WAY_VALVE)} />
}
