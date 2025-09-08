import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELECTRIC_MOTOR_AC = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.electric_motor_(ac);fontSize=45;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ElectricMotorAc(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTRIC_MOTOR_AC}
      {...props}
      _style={extendStyle(ELECTRIC_MOTOR_AC, props)}
    />
  )
}
