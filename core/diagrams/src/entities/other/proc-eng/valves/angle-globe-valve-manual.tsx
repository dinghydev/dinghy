import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANGLE_GLOBE_VALVE_MANUAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=angleGlobe;actuator=man',
  },
  _width: 100,
  _height: 120,
}

export function AngleGlobeValveManual(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, ANGLE_GLOBE_VALVE_MANUAL)} />
  )
}
