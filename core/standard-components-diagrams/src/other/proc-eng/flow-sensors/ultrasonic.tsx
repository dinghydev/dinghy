import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ULTRASONIC = {
  _style:
    'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.ultrasonic;',
  _width: 50,
  _height: 50,
}

export function Ultrasonic(props: DiagramNodeProps) {
  return <Shape {...ULTRASONIC} {...props} />
}
