import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_3_POSITION_SWITCH_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.threePositionSwitch2;elSwitchState=2;',
  _width: 60,
  _height: 60,
}

export function Component3PositionSwitch2(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_3_POSITION_SWITCH_2} {...props} />
}
