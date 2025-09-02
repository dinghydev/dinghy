import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLE_GLOBE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=angleGlobe;actuator=none',
  },
  _original_width: 100,
  _original_height: 80,
}

export function AngleGlobeValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLE_GLOBE_VALVE}
      {...props}
      _style={extendStyle(ANGLE_GLOBE_VALVE, props)}
    />
  )
}
