import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELECTRICAL_MOTOR = {
  _style:
    'verticalLabelPosition=middle;shadow=0;dashed=0;align=center;html=1;verticalAlign=middle;strokeWidth=1;shape=ellipse;aspect=fixed;fontSize=35;',
  _width: 60,
  _height: 60,
}

export function ElectricalMotor(props: DiagramNodeProps) {
  return <Shape {...ELECTRICAL_MOTOR} {...props} />
}
