import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELECTRIC_MOTOR_DC = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.electric_motor_(dc);fontSize=45;',
  },
  _width: 60,
  _height: 60,
}

export function ElectricMotorDc(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTRIC_MOTOR_DC}
      {...props}
      _style={extendStyle(ELECTRIC_MOTOR_DC, props)}
    />
  )
}
