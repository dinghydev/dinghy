import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_3_WAY_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=threeWay;actuator=none',
  },
  _original_width: 100,
  _original_height: 80,
}

export function Component3WayValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3_WAY_VALVE}
      {...props}
      _style={extendStyle(COMPONENT_3_WAY_VALVE, props)}
    />
  )
}
