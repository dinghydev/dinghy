import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REED_SWITCH_ON = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.reedSwitch2;elSwitchState=on;',
  _width: 75,
  _height: 20,
}

export function ReedSwitchOn(props: DiagramNodeProps) {
  return <Shape {...REED_SWITCH_ON} {...props} />
}
