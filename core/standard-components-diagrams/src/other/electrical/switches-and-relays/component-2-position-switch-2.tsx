import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_2_POSITION_SWITCH_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.twoPositionSwitch2;elSwitchState=2;',
  _width: 75,
  _height: 70,
}

export function Component2PositionSwitch2(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_2_POSITION_SWITCH_2} {...props} />
}
