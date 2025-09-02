import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELECTRICAL_MOTOR = {
  _style: {
    entity:
      'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=35;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ElectricalMotor(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELECTRICAL_MOTOR}
      {...props}
      _style={extendStyle(ELECTRICAL_MOTOR, props)}
    />
  )
}
