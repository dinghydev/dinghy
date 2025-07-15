import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOTORIZED_SWITCH_4P = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.motorized_switch_4p;',
  _width: 100,
  _height: 70,
}

export function MotorizedSwitch4p(props: DiagramNodeProps) {
  return <Shape {...MOTORIZED_SWITCH_4P} {...props} />
}
