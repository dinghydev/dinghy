import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ANGLE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=angle;actuator=none',
  },
  _original_width: 100,
  _original_height: 80,
}

export function AngleValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLE_VALVE}
      {...props}
      _style={extendStyle(ANGLE_VALVE, props)}
    />
  )
}
