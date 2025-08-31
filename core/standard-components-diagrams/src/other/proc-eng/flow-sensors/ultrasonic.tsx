import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ULTRASONIC = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.ultrasonic;',
  _width: 60,
  _height: 60,
}

export function Ultrasonic(props: DiagramNodeProps) {
  return (
    <Shape {...ULTRASONIC} {...props} _style={extendStyle(ULTRASONIC, props)} />
  )
}
