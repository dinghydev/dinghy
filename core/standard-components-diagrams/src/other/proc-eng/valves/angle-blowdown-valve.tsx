import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLE_BLOWDOWN_VALVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=gate;actuator=angBlow',
  },
  _original_width: 100,
  _original_height: 100,
}

export function AngleBlowdownValve(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLE_BLOWDOWN_VALVE}
      {...props}
      _style={extendStyle(ANGLE_BLOWDOWN_VALVE, props)}
    />
  )
}
