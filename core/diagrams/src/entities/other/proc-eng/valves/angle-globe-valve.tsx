import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ANGLE_GLOBE_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=angleGlobe;actuator=none',
  },
  _width: 100,
  _height: 80,
}

export function AngleGlobeValve(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ANGLE_GLOBE_VALVE)} />
}
