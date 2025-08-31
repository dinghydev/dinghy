import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLE_VALVE_MANUAL = {
  _style:
    'verticalLabelPosition=bottom;align=center;html=1;verticalAlign=top;pointerEvents=1;dashed=0;shape=mxgraph.pid2valves.valve;valveType=angle;actuator=man',
  _width: 100,
  _height: 120,
}

export function AngleValveManual(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLE_VALVE_MANUAL}
      {...props}
      _style={extendStyle(ANGLE_VALVE_MANUAL, props)}
    />
  )
}
