import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ULTRASONIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;outlineConnect=0;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.flow_sensors.ultrasonic;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Ultrasonic(props: DiagramNodeProps) {
  return (
    <Shape {...ULTRASONIC} {...props} _style={extendStyle(ULTRASONIC, props)} />
  )
}
