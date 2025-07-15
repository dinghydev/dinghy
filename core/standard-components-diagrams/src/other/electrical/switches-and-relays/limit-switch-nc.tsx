import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIMIT_SWITCH_NC = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.limitSwitch;elSwitchState=on;',
  _width: 75,
  _height: 25,
}

export function LimitSwitchNc(props: DiagramNodeProps) {
  return <Shape {...LIMIT_SWITCH_NC} {...props} />
}
