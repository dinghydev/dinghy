import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELECTRIC_MOTOR_AC = {
  _style:
    'dashed=0;outlineConnect=0;align=center;html=1;shape=mxgraph.pid.engines.electric_motor_(ac);fontSize=45;',
  _width: 100,
  _height: 100,
}

export function ElectricMotorAc(props: DiagramNodeProps) {
  return <Shape {...ELECTRIC_MOTOR_AC} {...props} />
}
