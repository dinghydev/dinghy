import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELECTRIC_MOTOR = {
  _style:
    'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.electric_motor;fontSize=45;',
  _width: 100,
  _height: 100,
}

export function ElectricMotor(props: DiagramNodeProps) {
  return <Shape {...ELECTRIC_MOTOR} {...props} />
}
